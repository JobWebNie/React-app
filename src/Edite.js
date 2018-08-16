import React,{Component,Fragment} from 'react';
import NssEditeSlider from './config/slider';
import NssPost from './config/post';
import Slider from './Slider';
import 'antd/dist/antd.css'

class Edite extends Component {
    render() {
        return(
            <Fragment>
                <Slider/>
                <div className="article">
                    <NssPost></NssPost>
                    <NssEditeSlider></NssEditeSlider>
                </div>
            </Fragment>
        )
    }
}

export default Edite