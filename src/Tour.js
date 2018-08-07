import React,{Component} from 'react';
import NssAxios from './course/axios';
import NssWrap from './course/wrap';
import 'antd/dist/antd.css'

class Tour extends Component {
    render() {
        return(
            <div className="article">
                <NssAxios></NssAxios>
                <NssWrap></NssWrap>
            </div>
        )
    }
}

export default Tour