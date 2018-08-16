import React,{ Component, Fragment} from 'react';
import './animation.css';
import {Icon,Button} from 'antd';


class NssAnimation extends Component{
    constructor(props){
        super(props);
        this.state = {
            minWidth:false,
            timer:null,
            addAnimate:false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        const timer=setInterval(()=>{
            const minWidth = this.state.minWidth;
            //需要定时执行的方法
            this.setState({
                minWidth:!minWidth
            })
            }, 5000)
            this.setState({
                timer:timer
            })
    }
    componentWillUnmount(){
        
        if(this.state.timer!= null) {

            clearInterval(this.state.timer);
            
            }
       
    }
    handleClick(){
        const showAnimat = this.state.addAnimate;
        this.setState({
            addAnimate:!showAnimat
        })
    }
    render(){
        const minWidth = this.state.minWidth;
        const showAnimat = this.state.addAnimate;
        return(
            <Fragment>
                <header className="articleheader">
                    <h2 className="headerName">
                        常用小动画
                    </h2>
                </header>
                <div className="article-body">
                    <div className="animate-loading">
                    </div>
                    <div className="animate-button">
                        <Icon type="arrow-right"></Icon>
                        {(minWidth&&<span className='button-text'>点击加载</span>)}
                    </div>
                    <div className={showAnimat ? "animate-move" : ''}>
                        <Button onClick={this.handleClick}>move</Button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NssAnimation;
