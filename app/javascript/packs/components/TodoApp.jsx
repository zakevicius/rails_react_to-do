import React from 'react'
import ReactDOM from 'react-dom'

const TodoApp = () => {
    return <p>TodoApp</p>
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('todo-app')
    app && ReactDOM.render(<TodoApp />, app)
})