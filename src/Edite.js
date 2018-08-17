import React,{Component,Fragment} from 'react';
import NssEditeSlider from './config/slider';
import NssPost from './config/post';
import Slider from './Slider';
import 'antd/dist/antd.css'

class Edite extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections:[
                {
                    isActive:true,
                    location:{
                        pathname:"/edite/Edite.html"
                    },
                    section:{
                        items:[
                            {
                                id:"Edite",
                                title:"Edite 编辑"
                            },
                            {
                                id:"post",
                                title:"post 数据"
                            }
                        ],
                        title:"编写"
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
                    <NssPost></NssPost>
                    <NssEditeSlider></NssEditeSlider>
                </div>
            </Fragment>
        )
    }
}

export default Edite