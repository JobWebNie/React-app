import React,{Component,Fragment} from 'react';
import {Row, Col} from 'antd';

class AntGrid extends Component{
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>Grid 栅格</h2> 
                </header>
                <div className="article-body">
                    <p>Row Col 源于bootStrap栅格系统</p>
                    <Row>
                        <Col style={{backgroundColor:'#61dafb',
                                color:'#fff'}} 
                                xs={24} 
                                sm={16} 
                                md={18} 
                                lg={20}
                                >
                            响应式body
                        </Col>
                        <Col style={{
                                backgroundColor:'#20232a',
                                color:'#fff',
                                textAlign:'right'}}
                                xs={{ span: 0 }} 
                                sm={8} md={6} 
                                lg={4}
                            >
                            响应式aside
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default AntGrid;