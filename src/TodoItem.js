import React,{ Component } from'react'

class TodoItem extends Component{

    // 子组件要和父组件通讯需要调用父组建的方法

    constructor(props){
        super(props);
        this.handleDelete =this.handleDelete.bind(this)
    }
    handleDelete(){

        this.props.delete(this.props.index)
    }
    render(){
        const { content } = this.props
        return(
            <div onClick={this.handleDelete}>{content}</div>
        )
    }

}

export default TodoItem;