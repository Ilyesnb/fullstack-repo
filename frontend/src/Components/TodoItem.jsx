import React from 'react';
import { useEffect, useState } from 'react';
import trashIcon from "../images/delete-bin-line.png"
const App_BASE = "http://localhost:3004"

const TodoItem = () => {
    const [newTodos, setNewTodos] = useState([])

    const getTodo = () => {
        fetch(App_BASE + "/todoList")
            .then(res => res.json())
            .then(data => setNewTodos(data))
            .catch((err) => {
                console.log({ err: "can not add api" });
            })
    }
    useEffect(() => {
        getTodo()
    }, [])
    return (
        <div>
            {
                newTodos.map((item, index) => (
                    <div className='container' key={index}>

                        <div className='Pcontainer'>

                            <p className='peading'>{item.title}</p>
                        </div>
                        <div>

                            <img className='trashIcon' src={trashIcon} alt="" />
                        </div>
                    </div>

                ))}
        </div>

    );
};

export default TodoItem;