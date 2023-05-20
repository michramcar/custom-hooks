import { useEffect, useReducer } from "react"

import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos) || []);
    },[todos])

    const handleNewTodo = (item) => {
        dispatch({
            type: 'Add Todo',
            payload: item
        });
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => { 
        dispatch({
            type: 'Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(e=>!e.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}