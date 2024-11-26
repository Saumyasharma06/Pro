import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todos,setTodos]=useState([]);
    const [input, setInput]=useState('');

    const addTodo=()=>{
        if(input.trim()!==''){
            setTodos([...todos,input]);
            setInput('');
        }
    }
  return (
    <div>
        <h1>To-Do list</h1>
        <input className='text-slate-600' type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Add a task' />
        <button className='rounded-md ' onClick={addTodo}>Add</button>
        <ul className='text-slate-600'>
            {todos.map((todo,index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todo
