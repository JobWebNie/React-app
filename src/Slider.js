import React,{ Component } from  'react';
import './Slider.css'
class Slider extends Component{

    render(){
        return (
            <div className="asider-container">
                <div className="asider">
                    <nav className="asider-nav">
                        <div className="section">
                        <button className="sectionTitle">
                            <div className="titleText">
                            installAtion
                            </div>
                        </button>
                            <ul className="sectionBody">
                            <li className="sectionItem">
                                <a className="itemLink" href="#install-antd">
                                add antd to React
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
            </div>
        )
    }
}

export default Slider;