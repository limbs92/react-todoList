import React from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends React.Component{
// constructor(props){
//   super(props);

// }

state = {
  input: '',
  todos:[
    { id:0, text: 'Study React', done: true},
    { id:1, text: 'Styling Component', done: false}
  ],
};

//일정 데이터 안에 들어가는 id 값
id = 1
getId = () => {
  return ++this.id;
};

handleChange = (e) => {
  const { value } = e.target;
  this.setState({
    input: value
  });
};

//데이터 추가
handleInsert = () => {
  const { todos, input } = this.state;

  //새 데이터 객체 만들기
  const newTodo = {
    text : input,
    done : false,
    id: this.getId()
  };

  //setState 로 데이터 등록
  this.setState({
    todos:[...todos, newTodo],
    input: ''
  });
};

handleToggle = (id) => {
  //id로 배열 인덱스 찾기
  const { todos } = this.state;
  const index = todos.findIndex(todo => todo.id === id);

  //찾은 데이터 'done' 값 반전시키기
  const toogled = {
    ...todos[index],
    done: !todos[index].done
  };

  this.setState({
    todos: [
      ...todos.slice(0, index),
      toogled,
      ...todos.slice(index + 1, todos.length)
    ]
  })
}

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleInsert,
      handleToggle
    } = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle}/>
      </PageTemplate>
    );
  }
}

export default App;