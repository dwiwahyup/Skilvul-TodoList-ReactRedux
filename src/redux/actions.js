const addTodo = (title) => {
    return {
        type: 'ADD_TODO',
        payload: title
    }
}

const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}

const updateTodo = (id, title) => {
    return {
        type: 'UPDATE_TODO',
        payload: { id: id, title: title }
    }
}

const filterTodo = (filter) => {
    return {
        type: 'FILTER_TODO',
        payload: filter
    }
}

export { addTodo, deleteTodo, toggleTodo, updateTodo, filterTodo };