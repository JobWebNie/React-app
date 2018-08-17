import React,{Component} from 'react';
import { NavLink} from 'react-router-dom'
import {Breadcrumb} from 'antd';

// class AntBreadcrumb extends Component{
//     render(){
//         return(
//             <div className="article">
//                 <header className="articleheader">
//                     <h2>Breadcrumb 面包屑</h2>
//                     <p></p>
//                 </header>
//                 <div className="article-body">
//                     <Breadcrumb>
//                         <Breadcrumb.Item>Docs</Breadcrumb.Item>
//                         <Breadcrumb.Item>
//                             <NavLink  to="/docs">Breadcrumb</NavLink>
//                         </Breadcrumb.Item>
//                     </Breadcrumb>
//                 </div>   
//             </div>
//         )
//     }
// }

// export default AntBreadcrumb;


class AntBreadcrumb extends Component{
    constructor(props){
        super(props);
        this.state = {
            routes:[{
                path: '/',
                breadcrumbName: '首页'
              }, {
                path: 'Docs',
                breadcrumbName: '一级面包屑'
              }, {
                path: '/',
                breadcrumbName: '当前页面'
              }]
        }
        this.itemRender = this.itemRender.bind(this);
    }
     itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <NavLink to={paths.join('/')}>{route.breadcrumbName}</NavLink>;
      }
      
    render(){
        return(
            <div id="antd-breadcrumb">
                <header className="articleheader">
                     <h2>Breadcrumb 面包屑</h2>
                 </header>
                 <div className="article-body">
                    <p>可以使用 itemRender 方法 将routers 传入</p>
                     <Breadcrumb itemRender={this.itemRender} routes={this.state.routes}/>
                </div>   
            </div>
        )
    }
}
export default AntBreadcrumb;