import React,{Component,Fragment} from 'react';
import {Select} from 'antd';
const {Option,OptGroup} = Select;

class AntSelect extends Component{
    constructor(props){
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(input,option){
        return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Select 筛选框</h2>
                </header>
                <div className="article-body">
                    <p>可以使用OptGroup进行分组</p>
                    <p>如需实现联动 请Cascader文档</p>
                    <Select
                    optionFilterProp="children"
                    showSearch
                    filterOption={this.handleFilter} style={{width:120}}>
                        <OptGroup label="Manager">
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                        </OptGroup>
                        <OptGroup label="Engineer">
                            <Option value="Yiminghe">yiminghe</Option>
                        </OptGroup>
                    </Select>
                </div>
            </Fragment> 
        )
    }
}

export default AntSelect;