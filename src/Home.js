import React, { Component} from 'react';
import './Home.css'

function ArticleHeader(props){
    return(
        <div className="article">
            <header className="articleheader">
                <h1 className="headerName">{props.name}</h1>
            </header>
            <div className="article-body">
                <p>Start Learn React documentation on tutorial</p>
                <p>Second Read The Document API</p>
                <p>Then Read The React-Router's document</p>
                <p>Learn Antd UI Frame</p>
                <hr/>
            </div>
        </div>
    )
}
class Home extends Component{
    render(){
        return (
            <ArticleHeader name="Getting Started">
            </ArticleHeader>
        )
    }
}
export default Home;