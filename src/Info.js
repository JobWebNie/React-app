import React, { Component} from 'react';
import {Icon} from 'antd';
import avatarPhoto from './avatar.jpg'
import './Info.css';


class Info extends Component{

        render(){
            return(
                <div className="resume">
                    <div className="resume-left">
                        <div className="left-avatar">
                            <a href="" className="left-avatar-box">
                                <img src={avatarPhoto} alt=""/>
                            </a>
                            
                        </div>
                        <div className="left-items resume-item">
                            <div className="cell">
                                <Icon type="solution" className="cell-icon" />
                                <span className="cell-text">26岁</span>
                            </div>
                            <div className="cell">
                                <Icon type="tags" className="cell-icon" />
                                <span className="cell-text">汉族</span>
                            </div>
                            <div className="cell">
                                <Icon type="environment-o" className="cell-icon" />
                                <span className="cell-text">郑州</span>
                            </div>
                            <div className="cell">
                                <Icon type="phone" className="cell-icon" />
                                <span className="cell-text">18538579178</span>
                            </div>
                        </div>
                        <div className="left-items resume-item">
                            <div className="items-name">
                                <Icon type="api" className="items-name-icon"/>
                                <span className="items-name-text">
                                  技能特长
                                </span>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    HTML5,CSS3,JS
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg">
                                        </div>
                                    </div>
                                    <span className="process-text">熟悉</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    Vue,React,Nodejs
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg">
                                        </div>
                                    </div>
                                    <span className="process-text">熟悉</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    Express,
                                    Koa2
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg" style={{width:'55%'}}>
                                        </div>
                                    </div>
                                    <span className="process-text">熟悉</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    Bootstrap,
                                    Antd
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg" style={{width:'55%'}}>
                                        </div>
                                    </div>
                                    <span className="process-text">熟悉</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    git,webpack
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg" style={{width:'50%'}}>
                                        </div>
                                    </div>
                                    <span className="process-text">熟悉</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    Mongodb,Mysql
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg" style={{width:'35%'}}>
                                        </div>
                                    </div>
                                    <span className="process-text">了解</span>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="cell-name-top">
                                    Echart3,Nginx
                                </div>
                                <div className="cell-process">
                                    <div className="process-inner">
                                        <div className="process-bg" style={{width:'35%'}}>
                                        </div>
                                    </div>
                                    <span className="process-text">了解</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume-right">
                        <h2 className="right-title">聂赛赛</h2>
                        <div className="resume-item">
                            <div className="item-title">
                                <div className="title-icon">
                                    <Icon type="schedule" />
                                </div>
                                <div className="title-text" >求职意向</div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <Icon type="desktop" className="grid-icon" />
                                    <span className="grid-text">web前端开发</span>
                                </div>
                                <div className="grid">
                                    <Icon type="laptop" className="grid-icon" />
                                    <span className="grid-text">全职</span>
                                </div>
                                <div className="grid">
                                    <Icon type="global" className="grid-icon" />
                                    <span className="grid-text">成都,杭州</span>
                                </div>
                                <div className="grid">
                                    <Icon type="folder" className="grid-icon" />
                                    <span className="grid-text">5.8K-7K</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-item">
                            <div className="item-title">
                                <div className="title-icon">
                                    <Icon type="schedule" />
                                </div>
                                <div className="title-text" >教育背景</div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">2012.09-2016.06</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">河南科技大学</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">动物医学</span>
                                </div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">2008.09-2012.06</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">永城实验高中</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">实验班</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-item">
                            <div className="item-title">
                                <div className="title-icon">
                                    <Icon type="code-o" />
                                </div>
                                <div className="title-text" >专业培训</div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">2016.06.03-2016.10.15</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">郑州智游教育</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">web前端培训</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-item">
                            <div className="item-title">
                                <div className="title-icon">
                                    <Icon type="file-text" />
                                </div>
                                <div className="title-text" >工作经验</div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">2016.11.15-2018.01.15</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">河南宝儿电子商务有限公司</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">web前端开发</span>
                                </div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">2018.03.15-2018.07.30</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">苏州一心软件有限公司</span>
                                </div>
                                <div className="grid">
                                    <span className="grid-text">web前端开发</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume-item">
                            <div className="item-title">
                                <div className="title-icon">
                                    <Icon type="edit" />
                                </div>
                                <div className="title-text" >自我评价</div>
                            </div>
                            <div className="item-body">
                                <div className="grid">
                                    <span className="grid-text">
                                        为人热情,交际强,对工作认真负责,不怕辛苦,适应性强。
                                        善于发现，分析，解决和总结问题。
                                    </span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Info;