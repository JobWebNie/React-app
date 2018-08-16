import React,{ Component, Fragment} from 'react';
import './wrap.css';

class NssWrap extends Component{
    constructor(props){
        super(props);
        this.state={
            prodList:{
                actived:0,
                children:[
                    {
                        src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        title:'少年游.极光龙江地铁站省妇幼南艺一线江景一居'
                    },
                    {
                        src:'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
                        avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                        title:'少年游.极光龙江地铁站省妇幼南艺一线江景2居'
                    }
                ]
            }
        }
    }
    render(){
        const {actived, children} = this.state.prodList;
        const item = children[actived];
        const pages = [];
        children.forEach((item,index)=>{
            if(index === actived){
                pages.push(<span key={index} className="page-pot pot-actived"></span>)
            }else{
                pages.push(<span key={index} className="page-pot"></span>)
            }
            
        })
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>自定义封装 组件</h2>
                </header>
                <div className="article-body">
                    <p>封装组件？复用，易维护，减少代码量</p>
                    <p>下面来封装一个商品列表</p>
                    <div style={{position:'relative',width:'100%'}}>
                        <img 
                        width='100%' 
                        height="462px" 
                        src={item.src}
                        alt="product"/>
                        <div className="page-raw">
                            {pages}
                        </div>
                        <div className="avatar">  
                             <a>
                                <img 
                                width="100%"
                                height="100%"
                                src={item.avatar}
                                alt="vendor"/>
                            </a> 
                        </div>
                        <div className="product-info">
                            <span className="product-title">
                                {item.title}
                            </span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NssWrap;