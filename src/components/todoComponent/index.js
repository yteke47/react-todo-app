import React from 'react'
import TodoAdd from './todoAdd/TodoAdd'
import TodoList from './todoList/TodoList'
import Footer from './footer/Footer'
import Header from './header/Header'

import { TodoProvider } from '../../context/TodoContext'

function TodoComponent() {
    return (
        <TodoProvider>
            <Header />
            <TodoAdd />
            <TodoList />
            <Footer />
        </TodoProvider>
    )
}

export default TodoComponent