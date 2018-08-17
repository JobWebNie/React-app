import React,{Component,Fragment} from 'react';
import NssAxios from './course/axios';
import NssWrap from './course/wrap';
import Slider from './Slider';
import NssAnimation from './course/animation';

import 'antd/dist/antd.css'

class Tour extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections:[
                {
                    isActive:true,
                    location:{
                        pathname:"/tutorial/axios.html"
                    },
                    section:{
                        items:[
                            {
                                id:"axios",
                                title:"Axios 交互"
                            },
                            {
                                id:"conponent",
                                title:"自定义组件"
                            },
                            {
                                id:"animation",
                                title:"动画效果"
                            },
                        ],
                        title:"快速上手"
                    }
                }
            ]
        }
    }
    render() {
        return(
            <Fragment>
                <Slider sections={this.state.sections}/>
                <div className="article">
                    <NssAxios></NssAxios>
                    <NssWrap></NssWrap>
                    <NssAnimation></NssAnimation>
                </div>
            </Fragment>
        )
    }
}

export default Tour