import React,{Component,Fragment} from 'react';
import {BackTop,Icon} from 'antd';

class AntBackTop extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>BackTop 回到顶部</h2>
                </header>
                <div className="article-body">
                    <p>提供常用布局方式</p>
                    <BackTop>
                        
                        <Icon type="toTop" />
                        <div >回到顶部</div>
                    </BackTop>
                    
                </div>   
            </Fragment>
        )
    }
}

export default AntBackTop;