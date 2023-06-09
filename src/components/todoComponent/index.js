import React from 'react'
import TodoAdd from './todoAdd/TodoAdd'
import TodoList from './todoList/TodoList'
import Footer from './footer/Footer'
import { TodoProvider } from '../../context/TodoContext'


function TodoComponent() {
    return (
        <TodoProvider>
            <h1>Todo App</h1>
            <TodoAdd />
            <TodoList />
            <Footer />
        </TodoProvider>
    )
}

export default TodoComponent