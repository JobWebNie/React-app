import React, { Component} from 'react';
import PropTypes from 'prop-types'
import {withRouter} from "react-router-dom";
import './Login.css'
class Login extends Component{
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }

    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        }
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePassworldChange = this.handlePassworldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    handleNameChange(event){
        this.setState({name: event.target.value});
    }
    handlePassworldChange(event){
        this.setState({password: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.history.push("/")
    }
    render(){
        return (
            <div className="login-box">
                <div className="login-form">
                    <div className="login-info">
                        <div className="info-title">
                            <a className="title-link" href="">
                                <span style={{color:'#343a40'}}>React</span>
                                <span style={{color:'#61dafb'}}>Learn</span>
                             </a>
                            <p style={{color:'#6c757d'}}>登录</p>
                        </div>
                        <div className="info-body">
                            <div className="info-body-inner">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div style={{padding:'20px 0px'}}>
                                        <div className="form-group">
                                            <input 
                                            type="text" 
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleNameChange}
                                            placeholder="名字"/>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            value={this.state.passworld}
                                            onChange={this.handlePassworldChange}
                                            type="password" 
                                            name="password"
                                            placeholder="密码"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button 
                                        type="submit"
                                        className="button"
                                        >登录</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);