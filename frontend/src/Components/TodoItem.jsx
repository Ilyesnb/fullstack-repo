import React from 'react';
import trashIcon from "../images/delete-bin-line.png"
import axios from "axios"
const App_BASE = "http://localhost:3004"

const TodoItem = ({ titel}) => {
    const handleDelete = (id) => {
        console.log("Deleting todo with ID:", id);
        axios.delete(`${App_BASE}/todoList/${id}`, { method: "DELETE" })
            .then((res) => {
                console.log("Todo deleted successfully:'", res.data);
            })
            .catch(error => {
                console.error('Error deleting todos:', error);
            });
    }
    return (
        <div>
            <div className='container'>

                <div className='Pcontainer'>

                    <p className='peading'>{titel}</p>
                </div>
                <div>
                    <button className='trashIcon' onClick={(id)=>handleDelete(id)}>
                        <img src={trashIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default TodoItem;