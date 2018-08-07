import React,{Component,Fragment} from 'react';
import {TreeSelect} from 'antd';

class AntTreeSelect extends Component{
    constructor(props){
        super(props);
        this.state={
            treeData:[
                {
                    title: 'Node1',
                    value: '0-0',
                    key: '0-0',
                    children: [{
                        title: 'Child Node1',
                        value: '0-0-1',
                        key: '0-0-1',
                        children: [{
                            title: 'Child child Node1',
                            value: '0-0-0-1',
                            key: '0-0-0-1'
                          }] 
                      },{
                        title: 'Child Node2',
                        value: '0-0-2',
                        key: '0-0-2'
                      }] 

                }
            ]
        }
    }
    render(){
        return (
            <Fragment>
                <header className="articleHeader">
                    <h2>TreeSelect 树选择器</h2>
                </header>
                <div className="article-body">
                    <p>可以使用treeData进行设置</p>
                    <TreeSelect
                        style={{minWidth:150}}
                        // value="0-0-1"
                        treeCheckable= {true}
                        treeData={this.state.treeData}
                    >
                    </TreeSelect>
                </div>
            </Fragment>
        )
    }
}

export default AntTreeSelect;