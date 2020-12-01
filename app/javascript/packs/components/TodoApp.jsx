import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import TodoItems from "./TodoItems"
import TodoItem from "./TodoItem"

const TodoApp = () => {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        getTodoItems();
    })

    const getTodoItems = () => {
        axios
            .get("/api/v1/todo_items")
            .then(res => setTodoItems(res.data))
            .catch(err => console.log(err))
    }

    return (
        <TodoItems>
            {todoItems.map(item => (
                <TodoItem key={item.id} todoItem={item} />
            ))}
        </TodoItems>
    )
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('todo-app')
    app && ReactDOM.render(<TodoApp />, app)
})