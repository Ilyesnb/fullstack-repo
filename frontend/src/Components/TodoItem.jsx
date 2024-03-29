import trashIcon from "../images/delete-bin-line.png"
import axios from "axios"
const App_BASE = "http://localhost:3004"

const TodoItem = ({ id, title}) => {
    const handleDelete = () => {
        console.log(title);
        console.log("Deleting todo with ID:", id);
        axios.delete(`${App_BASE}/todoList/${id}`)
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
                    <p className='peading'>{title}</p>
                </div>
                <div>
                    <button className='trashIcon' onClick={()=>{handleDelete(id)}}>
                        <img src={trashIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default TodoItem;