import trashIcon from "../images/delete-bin-line.png"
import axios from "axios"
APP_URI = "https://fullstack-repo-1.onrender.com"
const TodoItem = ({ title, id,onDelete }) => {
    const handleDelete = () => {
        console.log("Deleting todo with ID:", id)
        axios.delete(`${process.env.APP_URI}/todoList/${id}`)
            .then((res) => {
                onDelete(id);
                console.log("Todo deleted successfully:'", res.data);
            })
            .catch(error => {
                console.error('Error deleting todos:', error);
            });
    }
    return (
        <div>
            <div className='container' >
                <div className='Pcontainer'>
                    <p className='peading'>{title}</p>
                </div>
                <div>
                    <button className='trashIcon' onClick={handleDelete}>
                        <img src={trashIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default TodoItem;