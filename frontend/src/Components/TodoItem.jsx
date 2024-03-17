import React from 'react';
import { useEffect, useState } from 'react';
import trashIcon from "../images/delete-bin-line.png"
import axios from "axios"
const App_BASE = "http://localhost:3004"

const TodoItem = () => {
    const [newTodos, setNewTodos] = useState([])
    useEffect(() => {
        axios.get(App_BASE+"/todoList")
        .then(todo => setNewTodos(todo.data))
        .catch((err)=>{
            console.log({err:"can not connect to the database"})
        })
    }, [])
    const handleDelete = (id) =>{
        axios.delete(`${App_BASE}/todoList/${id}`)
        .then((res) => {
            
            console.log("Todo deleted successfully:'",res.data);
            setNewTodos(newTodos.filter(todo => todo.id !== id));
        })
        .catch(error => {
            console.error('Error deleting todo:', error);
        });
    }
    return (
        <div>
            {
                newTodos.map((item, index) => (
                    <div className='container' key={index}>

                        <div className='Pcontainer'>

                            <p className='peading'>{item.title}</p>
                        </div>
                        <div>
                            <button className='trashIcon' onClick={()=> {handleDelete(item.id)}} >
                            <img src={trashIcon} alt="" />
                            </button>
                        </div>
                    </div>

                ))}
        </div>

    );
};

export default TodoItem;