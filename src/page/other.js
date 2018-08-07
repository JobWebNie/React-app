import React,{Component,Fragment} from 'react';
import {Alert} from 'antd';

class AntOtherMore extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Antd 其他组件</h2>
                </header>
                <div className="article-body">
                    <p>Table,Tree,Model,Anchor,Drawer等</p>
                    <Alert
                        message="Info Text"
                        description="Info Description Info Description Info Description Info Description"
                        type="info"
                        />
                </div>
            </Fragment>
        )
    }
}

export default AntOtherMore;