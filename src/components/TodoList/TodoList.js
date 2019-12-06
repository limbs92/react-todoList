import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component{
  render() {
    return (
      <div>
        <TodoItem done>Study React</TodoItem>
        <TodoItem>Styling to Component</TodoItem>
      </div>
    );
  }
}

export default TodoList;