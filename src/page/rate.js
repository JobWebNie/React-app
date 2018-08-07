import React,{Component,Fragment} from 'react';
import {Rate} from 'antd';


class AntRate extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Rate 评分</h2>
                </header>
                <div className="article-body">
                    <p>与element api 大致相同</p>
                    <p>使用时注意几个函数的不同</p>
                    <Rate />
                </div>
            </Fragment>
        )
    }
}

export default AntRate;