import { useState } from "react";
import { Containers, HContainer, Header, Form, Input, Bt, InputContainer, ItemsContainer } from "../styles/todoInput.styled"
import TodoItem from "./TodoItem";
import "../styles/todoItems.css"
const TodoInput = () => {
    const [todo, setTodo] = useState("")
    const handleChanege = (e) =>{
        setTodo(e.target.value)


    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setTodo("")


    }
    return (
        <Containers>
            <InputContainer>
                <HContainer>
                    <Header>Get things Done !</Header>
                </HContainer>
                <Form onSubmit={handleSubmit}>
                    <Input onChange={handleChanege} type="text" placeholder="What needs to be done?" required value={todo} />
                    <Bt>Add task</Bt>
                </Form>
                <ItemsContainer>
                        <TodoItem />
                </ItemsContainer>
            </InputContainer>
        </Containers>

    );
};

export default TodoInput;