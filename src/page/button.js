import React,{Component, Fragment} from 'react';
import {Button}from 'antd';
const {Group} = Button;

class AntButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            disabled:false,
            ghost:false,
            href:'',
            // htmlType:'button',
            icon:'',
            loading:false,
            shape: null,
            size:'default',
            target:'',
            type:'',
        }
        this.handleDisabledClick  =this.handleDisabledClick.bind(this);
        this.handleLoadingClick  =this.handleLoadingClick.bind(this);
        this.handleGhostClick  =this.handleGhostClick.bind(this);
        this.handleSizeClick  =this.handleSizeClick.bind(this);
    }

    handleDisabledClick(){
        const disabled = this.state.disabled;
        this.setState({
            disabled:!disabled
        })
    }
    handleLoadingClick(){
        const loading = this.state.loading;
        this.setState({
            loading:!loading
        })
    }
    handleGhostClick(){
        const ghost = this.state.ghost;
        this.setState({
            ghost: !ghost
        })
    }
    handleSizeClick(){
        let size = this.state.size;
        if(size === 'default'){
            size = 'large'
        }else if(size === 'large'){
            size = 'small'
        }else{
            size= 'default'
        }
        this.setState({
            size: size
        })
    }
    render(){
        let state = this.state;
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>button</h2>
                </header>
                <div className="article-body">
                    <p> Button组件 常用 type loading size href 属性</p>
                    <Button ref="antButton" disabled={state.disabled} 
                            ghost={state.ghost} 
                            href={state.href} 
                            // htmlType={state.htmlType} 
                            icon={state.icon} 
                            loading={state.loading} 
                            shape={state.shape} 
                            size={state.size} 
                            target={state.href&&state.target} 
                            type={state.type} >button style
                    </Button>
                    <br/>
                    <br/>
                    <Group>
                        <Button onClick={this.handleDisabledClick}>disabled</Button>
                        <Button onClick={this.handleGhostClick}>ghost</Button>
                        <Button onClick={this.handleLoadingClick}>loading</Button>
                        <Button onClick={this.handleSizeClick}>size</Button>
                    </Group>
                </div>              
            </Fragment>
        )
    }
}

export default AntButton;