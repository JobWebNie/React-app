import React,{Component,Fragment} from 'react';
import {Card} from 'antd';

class AntCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            key: 'tab1',
            tabList:[{
                key: 'tab1',
                tab: 'tab1',
              }, {
                key: 'tab2',
                tab: 'tab2',
              }]
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(key){
        this.setState({
            key
        })
    }

    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Card 卡片</h2>
                </header>
                <div className="article-body">
                    <p>常用于配合栅格系统， 进行后台的布局</p>
                    <Card
                        style={{ width: '100%' }}
                        title="Card title"
                        extra={<a href="">More</a>}
                        tabList={this.state.tabList}
                        activeTabKey={this.state.key}
                        onTabChange={this.handleTabChange}
                        >
                    </Card>
                </div>
            </Fragment>
        )
    }
}

export default AntCard;