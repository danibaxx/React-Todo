import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state= {
      task: '',
      TodoList: [
        {
          task:'Mow Grass',
          id: 1,
          completed: false
        },
        {
          task:'Vacuum',
          id: 2,
          completed: false 
        },
        {
          task:'Laundry',
          id: 3,
          completed: false
        },
        {
          task:'Dishes',
          id: 4,
          completed: false
        },
        {
          task:'Grocery Shopping',
          id: 5,
          completed: false
        },
        {
          task:'Clean Bathroom',
          id: 6,
          completed: false
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>To Do List:</h1>
        {/* <Todo /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
