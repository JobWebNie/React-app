import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="box">
                    <div className="header-inner">
                        <NavLink activeClassName="selected" className="list-item-logo" to="/">
                        <img height="20" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
                        </NavLink>
                        <nav className="navBar">
                        <NavLink activeClassName="selected" className="list-item" to="/docs">Docs</NavLink>
                        <NavLink activeClassName="selected" className="list-item" to="/tutorial">Tutorial</NavLink>
                        <NavLink activeClassName="selected" className="list-item" to="/edite">Edite</NavLink>
                        </nav>
                        <form className="header-form" action="">
                        <span className="form-item" style = {{position: 'relative',display: 'inline-block',direction: 'ltr'}}>
                            <input className="input-search" type="text"/>
                        </span>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;