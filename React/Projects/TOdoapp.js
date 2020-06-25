import React from 'react';
import { render } from "react-dom";
let id =0;
const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.ondelete}>delete</button>
    <span>{props.todo.text}</span>
    <span>{props.todo.id}</span>
  </li>
)


class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      todos: [],
    }
  }
  addTodo()
  {
    const text = prompt("ToDo text please : ")
    this.setState({todos : [...this.state.todos, {id: ++id,text: text, checked :false}],
    })
  }
  removeTodo(id)
  {
    this.setState({ todos : this.state.todos.filter(todo => todo.id !== id )})

  }
  toggleTodo(id)
  {
    this.setState({todos : this.state.todos.map (todo => {
      if(todo.id !== id) return todo
      return {
        id :todo.id,
        text :todo.text,
        checked :!todo.checked,
      }
    })})

  }
  render(){
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div> 
        <div> Unchecked count :{this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (<Todo 
           onToggle={() => this.toggleTodo(todo.id)}
          ondelete={() => this.removeTodo(todo.id)}
          todo={todo} 
          />))}
        </ul>
      </div>
    )
  }
}

render(<App />,document.getElementById('root'));
