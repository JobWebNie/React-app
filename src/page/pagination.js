import React,{Component,Fragment} from 'react';
import {Pagination} from 'antd';

class AntPagination extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }
    render(){
        return(
            <Fragment>
                <header className="articleHeader">
                    <h2>Pagination 分页</h2>
                </header>
                <div className="article-body">
                    <p>Pagination 分页和Element-ui中的分页支持的类型一致</p>
                    <p>下面写出最复杂的第4种实现</p>
                    <p>onChange函数回调参数为(页数，条数)</p>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                </div>
            </Fragment>
        )
    }
}

export default AntPagination;