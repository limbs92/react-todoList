import React from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component{
  render(){
    return (
      <PageTemplate>
        <TodoInput/>
        <TodoList/>
      </PageTemplate>
    );
  }
}

export default App;