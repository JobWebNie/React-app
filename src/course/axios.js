import React,{ Component, Fragment} from 'react';
import  Axios  from 'axios';
import {Table,Select,Pagination} from 'antd';
const {Option} = Select;
function getData(url,params){
    return new Promise((resolve,reject)=>{
        Axios.get(url,params).then((response)=>{
            resolve(response.data)
        }).catch((err=>{
            reject(err)
        }))
    })
}
class NssAxios extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultValue:50,
            page:1,
            data:[],
            columns:[{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
              }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
              }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
              }],
            error:null,
            current:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleMount = this.handleMount.bind(this);
    }
    componentDidMount() {
        this.handleMount()
    }
    componentDidUptated(props,state){
        console.log(props,state)
    }
    handleMount(value){
        const _this = this;
        const count = value ? value : this.state.defaultValue;
        const page = this.state.current ? this.state.current : 1;
        console.log(count)
        getData('http://localhost:3001/login',{
            params:{
                count:count,
                page:page
            }
           
        }).then((response)=>{
            const data = response.data;
            _this.setState({
                data: data
            })
            
          },(err)=>{
            throw err;
          })
    }
    handleChange(value){
        this.setState({
            defaultValue:value
        })
        this.handleMount(value)
    }
    render(){
        return(
            <Fragment>
                <header className="articleheader">
                    <h2 ref="affixTarget">
                        Axios 网络请求
                    </h2>
                </header>
                <div className="article-body">
                    <p>使用koa2-cors中间件解决跨域</p>
                    <Select 
                        defaultValue={this.state.defaultValue}
                        style={{ width: 80 }} 
                        onChange={this.handleChange}
                        >
                        <Option value={50}>50</Option>
                        <Option value={100}>100</Option>
                        <Option value={200}>200</Option>
                    </Select>
                    <Table  dataSource={this.state.data}
                            columns={this.state.columns}
                            pagination={
                            <Pagination current={this.state.current} 
                            pageSizeOptions
                            showSizeChanger showQuickJumper={true}
                            defaultCurrent={1} total={this.state.defaultValue}/>
                        }
                     />
                </div>
            </Fragment>
        )
    }
} 


export default NssAxios;
