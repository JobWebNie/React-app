import React,{Component,Fragment} from 'react';
import NssAxios from './course/axios';
import NssWrap from './course/wrap';
import Slider from './Slider';
import NssAnimation from './course/animation';

import 'antd/dist/antd.css'

class Tour extends Component {
    render() {
        return(
            <Fragment>
                <Slider path="tours"/>
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