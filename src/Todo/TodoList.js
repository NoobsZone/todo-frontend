import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react';

function TodoList() {
const [todos,setTodos]=useState([]);
const api ='http://localhost:5000/api/v1/todos';


useEffect( ()=>{
    getTodos();
    // console.log('ihihihi',todos);
},[])

async function getTodos(){
    const data = await axios.get(api);
    setTodos(data.data.todos);
    console.log(data.data.todos);
}

    return (
        <div>
            {
                todos.map((el,index)=><li key={index}>{el.name}</li>)
            }
        </div>
    )
}

export default TodoList
