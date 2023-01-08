import React, { useState } from 'react';
import Styles from './index.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import { ScopedCssBaseline} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Data =[
    {
      id:1,
      title:"clean the house",
      body:"some text"
    }
    ]
    function Content(){
    const [data, setData] = useState(Data);
    const [postTitle, setPostTitle] = useState('')
    const [light, setLight] = React.useState(true);
    const themeLight = createTheme({
        palette: {
          background: {
            default: "#fff"
          },
          text: {
            default: "#000"
          }
        }
      });
      const themeDark = createTheme({
        palette: {
            mode: 'dark',
          text: {
            primary: "#fff",
          },
          background: {
            default: "#000"
          },
        }
      });
    const handleForm = (e) => {
        e.preventDefault()
        const newPostData = [...data]
         if(postTitle.postTitle && postTitle.postTitle.trim()){
            newPostData.push({
                id: Math.random(),
                title: postTitle.postTitle,
                body: '' 
            })
         }
         setData(newPostData)
         setPostTitle({postTitle:''})
    }
    const handleInputData =(e) =>{
        setPostTitle({
            postTitle: e.target.value
        })
    }
    const handleDelete =(id) =>{
        const fileteredData = data.filter((i) => {
            return i.id !== id
        })
        setData(
            fileteredData
        )
    }
    const changeTheme =()=>{
        setLight((prev) => !prev)
    }
        return (
                <ThemeProvider theme={light ? themeLight : themeDark}>
                    <ScopedCssBaseline enableColorScheme>
                    <div className={Styles.container}>
                    <Switch
                    onClick={changeTheme}
                    />
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleForm}
                    >
                    <TextField 
                        id="outlined-basic" 
                        label="To-Do List  ☺️" 
                        variant="outlined"
                        type='title'
                        value={postTitle.postTitle}
                        placeholder={'E.g. read the book'}
                        onChange={handleInputData}
                        size="medium"
                        color='primary'
                        focused 
                    />
                    <Button 
                        variant="outlined"
                        type='submit'
                        size="medium"
                        sx={{ py: '14.5px' }}
                    >Add</Button>
                </Box>
                {data.map((item)=>{
                    return(
                        <List>
                        <ListItem 
                         className={Styles.cardItem}>
                            <ListItemText>
                                {item.title}
                            </ListItemText>
                            <DeleteIcon
                                onClick={()=>handleDelete(item.id)}
                                size='medium'
                                sx={{ m:'5px'}}
                                color='action'
                            />                           
                        </ListItem>
                      </List>
                        )
                        })}
                        </div>
                    </ScopedCssBaseline>
                </ThemeProvider>

        );
            }
export default Content






