import React, { Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login'
import Docs from './Docs'; 
import Tour from './Tour';
import Edite from './Edite';
import './index.css'

const NoMatch = ({ match }) => (
  <div>404</div>
)
class BasicExample extends Component{
  constructor(props){
    super(props);
    this.state={
      isLogin:null,
    }
    
    this.doLogin = this.doLogin.bind(this,props);
    this.updateHandle = this.updateHandle.bind(this);
  }
  updateHandle(){
    console.log('update')
  }
  doLogin(data){
    const {name,password} = data;

    if(name==='name'&&password==='password'){
      console.log(data)
    }
  }
  render(){
    return(
      <BrowserRouter forceRefresh={false}>
      <Fragment>
        <Header />
        <div className="body">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login"  component={Login}/>
            <Route path="/docs" component={Docs}/>
            <Route path="/tutorial" component={Tour}/>
            <Route path="/edite" component={Edite}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
        <Footer/>
      </Fragment>
    </BrowserRouter>
    )
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('root'));