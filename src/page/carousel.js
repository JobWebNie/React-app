import React,{Component,Fragment} from 'react';
import {Carousel} from 'antd';

class AntCarousel extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Carousel 跑马灯</h2>
                </header>
                <div className="article-body">
                    <p></p>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </div>
            </Fragment>
        )
    }
}

export default AntCarousel;