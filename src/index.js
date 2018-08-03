import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Docs from './Docs';
import Slider from './Slider';
import './index.css'

const Tutorial = ({ match }) => (
  <div>
    <h3>Tutorial</h3>
  </div>
)

const Blog = ({ match }) => (
  <div>
    <h2>Blog</h2>
  </div>
)
const NoMatch = ({ match }) => (
  <div>404</div>
)


const BasicExample = () => (
  <Router>
    <Fragment>
      {/* <div className="header">
        <div className="box">
          <div className="header-inner">
            <NavLink activeClassName="selected" className="list-item-logo" to="/">
              <img height="20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
            </NavLink>
            <nav className="navBar">
              <NavLink activeClassName="selected" className="list-item" to="/docs">Docs</NavLink>
              <NavLink activeClassName="selected" className="list-item" to="/tutorial">Tutorial</NavLink>
              <NavLink activeClassName="selected" className="list-item" to="/blog">Blog</NavLink>
            </nav>
            <form className="header-form" action="">
              <span className="form-item" style = {{position: 'relative',display: 'inline-block',direction: 'ltr'}}>
                <input className="input-search" type="text"/>
              </span>
            </form>
          </div>
        </div>
      </div> */}
      <Header />
      <div className="body">
        <Slider />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/docs" component={Docs}/>
          <Route path="/tutorial" component={Tutorial}/>
          <Route path="/blog" component={Blog}/>
          <Route component={NoMatch}/>
        </Switch>
        {/* <div className="asider-container">
          <div className="asider">
              <nav className="asider-nav">
                  <div className="section">
                    <button className="sectionTitle">
                      <div className="titleText">
                        installAtion
                        <svg className="toggle-icon"></svg>
                      </div>
                    </button>
                      <ul className="sectionBody">
                        <li className="sectionItem">
                          <a className="itemLink">
                            add React to Website
                          </a>
                        </li><li className="sectionItem">
                          <a className="itemLink">
                            Create a New React App
                          </a>
                        </li>
                        <li className="sectionItem">
                          <a className="itemLink">
                            CDN links
                          </a>
                        </li>
                        <li className="sectionItem">
                          <a className="itemLink" style={{fontWeight: 700}}>
                            Getting Start
                            <span className="itemText"></span>
                          </a>
                        </li>
                    </ul>
                  </div>
              </nav>
          </div>
          <div className="buttonFixedBR">
            <div className="box">
              <div className="icon-sliper">
                <div className="sliper-inner">
                  <svg className={true? "arrow-up":"arrow-up arrow-active"} width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#61dafb" d="M490.666667 422.4l302.933333 302.933333 59.733333-59.733333-298.666666-307.2L494.933333 298.666667l-59.733333 59.733333L128 665.6 187.733333 725.333333l302.933334-302.933333z"  /></svg>
                  <svg className={true? "arrow-down":"arrow-down arrow-active"} width="15" height="15" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#61dafb" d="M490.666667 422.4l302.933333 302.933333 59.733333-59.733333-298.666666-307.2L494.933333 298.666667l-59.733333 59.733333L128 665.6 187.733333 725.333333l302.933334-302.933333z"  /></svg>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  </Router>
)

ReactDOM.render(<BasicExample />, document.getElementById('root'));