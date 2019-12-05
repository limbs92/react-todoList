import React from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';

class App extends React.Component{
  render(){
    return (
      <PageTemplate>
        <TodoInput/>>
      </PageTemplate>
    );
  }
}

export default App;