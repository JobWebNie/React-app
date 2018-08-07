import React,{Component,Fragment} from 'react';
import {Dropdown,Menu,Icon} from 'antd';

class AntDropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
        this.getMenus = this.getMenus.bind(this);
    }
    
    getMenus(){
        let listItems = this.state.items;
        const rows = [];
        let lastcategory = null;
        listItems.forEach(function(item){
            
            if(item.category !== lastcategory) {
                rows.push(<div key={item.category} className="MenuName">{item.category}</div>)
            }

            rows.push(
                <Menu.Item key={item.name}>
                    <span>{item.name}{item.price}</span>
                </Menu.Item>
              );
              lastcategory = item.category; 
              
        })
        
        return(
            <Dropdown overlay={
                <Menu>
                    {rows}
                </Menu>
            } trigger={['click']}>
            <a className="ant-dropdown-link" href="">
            Click me <Icon type="down" />
            </a>
        </Dropdown>
            
        )
    }
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2>Dropdown 下拉菜单</h2>
                </header>
                <div className="article-body">
                    <p>实现一个小小的分类</p>
                    {this.getMenus()}
                </div>
            </Fragment>
        )
    }
}

export default AntDropdown;