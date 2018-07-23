import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    }
    this.handleInputValue= this.handleInputValue.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  handleBtnClick(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(key){
    const list = [...this.state.list]
    list.splice(key,1)
    this.setState({
      list: list
    })
  }

  getTodoItems(){
    return(
      this.state.list.map((item,key)=>{
        return (
          <TodoItem 
            key={key} 
            content={item} 
            index={key} 
            delete={this.handleDelete}
          />
        )
      })
    )
  }

  render() {
    // jsx语法
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputValue}/>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
      
    );
  }
}

export default TodoList;
