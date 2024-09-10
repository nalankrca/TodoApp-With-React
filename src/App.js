
import { useState } from 'react';
import './App.css';
import { useTodoLayerValue } from './context/TodoContext';
import TodoList from "../src/components/TodoList.jsx"
 
function App() {
  const [{todos}, dispatch] = useTodoLayerValue();
  const [content,setContent] =useState('')



 const handleSubmit = (e) =>{
  e.preventDefault();
  if(!content.trim()) return; // boş olması halinde add yapmasını engeller.

  const newTodo= {
    id: Math.floor(Math.random()*123),
    content,
    isCompleted:false // şuan yeni oluşturduğum için false olacak
  }

  dispatch({
    type:"ADD_TODO",
    payload:newTodo
  })

  setContent(' ');

}

 console.log(todos)
  return (
    <div className='container' >
      <form onSubmit={handleSubmit} className='todo-form' >
        <input
        type='text'
        className='todo-input'
        onChange={(event)=> {setContent(event.target.value) }}
        value={content}
        />
        <button className='todo-button'>Add</button>
      </form>      


      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
