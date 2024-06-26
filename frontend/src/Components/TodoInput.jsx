import { useState,useEffect } from "react";
import { Containers, HContainer, Header, Form, Input, Bt, InputContainer, ItemsContainer } from "../styles/todoInput.styled"
import TodoItem from "./TodoItem";
import "../styles/todoItems.css"
import axios from "axios"
const App_BASE = "https://fullstack-repo-1-rr0b.onrender.com";
const TodoInput = () => {
    const [todo, setTodo] = useState("")
    const [input, setInput] = useState([])
    // Submit the form data to the server using axios
    useEffect(() => {
        axios.get(App_BASE+"/todoList")
            .then((todo) =>{
                setInput(todo.data)
            })
                
            .catch((err) => {
                console.log({ err: "can not add todos" })
            })
    }, [])
    const handleChanege = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!todo.trim()) {
            // If todo is empty or only whitespace, return early
            return;
          }
        axios.post(App_BASE+"/todoList/create",{title:todo})
        .then(res => {
            // Add new todo to input state
            setInput([...input, res.data]);
            // Clear todo input field
            setTodo("");
        })
        .catch(error => {
            console.error('Error adding todo:', error);
        });
    }
    const handleDelete = id => {
        // Filter out the deleted todo from the input state
        setInput(input.filter(item => item._id !== id));
    };
    const handelKeyPress = (e) =>{
        if(e.key==="Enter"){
            handleSubmit(e)
        }
    }
    return (
        <Containers>
            <InputContainer>
                <HContainer>
                    <Header>Get things Done !</Header>
                </HContainer>
                <Form onSubmit={handleSubmit} >
                    <Input onChange={handleChanege} type="text" placeholder="What needs to be done?" required value={todo} onKeyDown={handelKeyPress} />
                    <Bt>Add task</Bt>
                </Form>
                <ItemsContainer>
                    {
                        input.map((item,index)=>(
                            <div key={index}>
                                <TodoItem id={item._id} title={item.title} onDelete={handleDelete}/>
                            </div>
                        ))
                    }
                </ItemsContainer>
            </InputContainer>
        </Containers>

    );
};

export default TodoInput;