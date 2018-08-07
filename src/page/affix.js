import React,{Component,Fragment} from 'react';
import { Button, Affix} from 'antd';
class AntAffix extends Component{
    constructor(props){
        super(props);
        this.getTargetElement = this.getTargetElement.bind(this);
    }
    getTargetElement(){
        const elemet  = this.refs.affixTarget;
        
        return elemet;
    }

    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2 ref="affixTarget">
                        Affix 固定
                    </h2>
                </header>
                <div className="article-body">
                    <p>Affix 主要用于滚动时进行定位，最容易想到的例子就是 '回到顶部' 按钮</p>
                    <p>当我们使用target时前提是 当我们的元素发生滚动行为才能触发</p>
                    <p>onchange 用来监听滚动行为 返回 true</p>
                    <hr/>
                <Affix offsetBottom={20}>
                    <Button>bottom 20</Button>
                </Affix> 
                </div>   
            </Fragment>  
        )
    }
}

export default AntAffix;