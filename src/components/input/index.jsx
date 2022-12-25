import React from 'react';
import Styles from './index.module.css'

const data =[
    {
      id:1,
      title:"some text",
      body:"some text"
    }
    ]
export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:data,
            postTitle:''
        }
    }
    handleForm = (e) => {
        e.preventDefault()
        const newPostData = [...this.state.data]
        if(this.state.postTitle && this.state.postTitle.match(/^\s+$/) == null){
            newPostData.push({
                id: Math.random(),
                body: '',
                title: this.state.postTitle
            })
        }

        this.setState({data: newPostData})
        this.setState({postTitle:''})

    }
    handleInputData =(e) =>{
        this.setState({
            postTitle: e.target.value 
         })

    }
    handleDelete =(id) =>{
        const fileteredData = this.state.data.filter((i) => {
            return i.id !== id
        })
        this.setState({
            data: fileteredData
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleForm} >
                    <input 
                    type='title'
                    value={this.state.postTitle}
                    placeholder='enter title'
                    onChange={this.handleInputData}
                    className={Styles.form}
                    />
                    <button 
                    type='submit'
                    className={Styles.btn}
                    >Add</button>
                    <p>{this.props.title}</p>
                </form>
                {this.state.data.map((item)=>{
                    return(
                        <div 
                        key={item.id}
                        className={Styles.cardItem}>
                            <span>{item.title}</span>
                            <button 
                            onClick={()=>this.handleDelete(item.id)}
                            className={Styles.btn}
                            >Remove</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

