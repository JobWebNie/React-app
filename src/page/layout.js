import React,{Component,Fragment} from 'react';
import {Layout} from 'antd';
const { Header, Footer, Content } = Layout;

class AntLayout extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>Layout 布局</h2>
                </header>
                <div className="article-body">
                    <p>提供常用布局方式</p>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </div>   
            </Fragment>
        )
    }
}

export default AntLayout;