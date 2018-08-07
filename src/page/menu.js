import React,{Component,Fragment} from 'react';
import {Menu,Icon} from 'antd';
const {SubMenu} = Menu;

class AntMenu extends Component{

    constructor(props){
        super(props);
        this.state={
            mode:'inline',
            theme:'light',
            current:'1'
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Menu 菜单</h2>
                    
                </header>
                <div className="article-body">
                    <p>支持默认激活子菜单，水平，垂直类型菜单,和菜单常用的事件回调函数</p>
                    <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 200 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode={this.state.mode}
                    >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                    </Menu>
                </div>
            </Fragment>
        )
    }
}

export default AntMenu