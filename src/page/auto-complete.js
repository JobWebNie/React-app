import React,{Component,Fragment} from 'react';
import { AutoComplete ,Input} from 'antd';

class AntAutoComplete extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:[],
            value:null
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSearch(value){
        let dataSource = [value+'@qq.com',value+'@163.com']
        
        this.setState({
            dataSource
        })
    }
    handleSelect(value,option){
        this.setState({
            value
        })
    }
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>AutoComplete 自动补全</h2>
                </header>
                <div className="article-body">
                    <p>数据源两种方式1.Option子类;2.dateSource参数['子类1','子类2']</p>
                    <p>onSearch 和onSelect方法比较常用</p>
                    <AutoComplete
                        dataSource={this.state.dataSource}
                        style={{ width: 200 }}
                        onSelect={this.handleSelect}
                        onSearch={this.handleSearch}
                    >
                       <Input.Search value={this.state.value} type="text"/>
                    </AutoComplete>
                </div>
            </Fragment>
        )
    }
}
export default AntAutoComplete;