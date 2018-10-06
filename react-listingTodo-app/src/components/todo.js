import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todo extends Component {

  render() {
    let todoItems;

    if(this.props.todos) {
      todoItems = this.props.todos.map(todo => {

        return (
          <TodoItem key={todo.title} todo={todo}/>
        )
      });
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}


export default Todo;
