import React,{Component,Fragment} from 'react';
import {Icon} from 'antd';

class AntIcon extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>Icon 图标</h2>
                </header>
                <div className="article-body">
                    <p>使用 type属性 ： 属性值为图标名称</p>
                    <Icon type="link" />
                    <Icon type="down" />   
                </div>   
            </Fragment>
        )
    }
}

export default AntIcon;