import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { toggleTodo, deleteTodo, updateTodo } from '../redux/actions';

function TodoList() {

    const [toggleEditTodo, SetToggleEditTodo] = useState(false);
    const [editTodoInputVal, SetEditTodoInputVal] = useState({ id: '', title: '' });
    const editTodoInputRef = useRef();
    var newTodos = [];

    const myTodoList = state => state.todos;
    const todos = useSelector(myTodoList);
    const myTodoFilter = state => state.filter;
    const filter = useSelector(myTodoFilter);


    if (filter === 'SHOW_ALL') {
        newTodos = [].concat(todos);
        newTodos.sort((a, b) => { return a.completed - b.completed });
    } else if (filter === 'SHOW_COMPLETED') {
        newTodos = todos.filter((todo) => { return todo.completed === true; });
    } else if (filter === 'SHOW_PENDING') {
        newTodos = todos.filter((todo) => { return todo.completed === false; });
    }


    const handleToggleTodo = (id) => {
        store.dispatch(toggleTodo(id));
    }

    const handleDeleteTodo = (id) => {
        store.dispatch(deleteTodo(id));
    }

    const handleShowEditTodo = (id, title) => {
        SetToggleEditTodo(true);
        SetEditTodoInputVal({ id: id, title: title });
        setTimeout(() => { editTodoInputRef.current.focus() }, 0);
    }

    const handleChangeEditInputVal = (e) => {
        SetEditTodoInputVal({ ...editTodoInputVal, title: e.target.value });
    }

    const handleEditTodo = () => {
        if (editTodoInputVal.title !== '') {
            store.dispatch(updateTodo(editTodoInputVal.id, editTodoInputVal.title));
            SetToggleEditTodo(false);
            SetEditTodoInputVal({ id: '', title: '' });
        }
    }

    return (
        <>
            <div className={toggleEditTodo ? "display" : "noDisplay"}>
                <fieldset>
                    <legend>EDIT Todo</legend>
                    <input ref={editTodoInputRef} value={editTodoInputVal.title} type="text" placeholder="Edit Title" onChange={(e) => handleChangeEditInputVal(e)} /><br />
                    <button onClick={handleEditTodo}>DONE</button><button onClick={() => { SetToggleEditTodo(false) }}>CANCEL</button>
                </fieldset>
            </div>
            <div>
                {
                    newTodos.map((item, index) => {
                        return (
                            <div className="listDiv flexDisplay" key={item.id}>
                                <div className="listData flexDisplay">
                                    <div>{index + 1}</div>
                                    <div className={!item.completed ? "toBeDoneItems" : "doneItems"}>{item.title}</div>
                                </div>
                                <div className="listActions flexDisplay">
                                    <div className="listStatus">{item.completed ? "completed" : "pending"}</div>
                                    <div><button onClick={() => { handleToggleTodo(item.id) }}>{item.completed ? "REDO" : "DONE"}</button></div>
                                    <div><button onClick={() => { handleShowEditTodo(item.id, item.title) }}>{"EDIT"}</button></div>
                                    <div><button onClick={() => { handleDeleteTodo(item.id) }}>{"DELETE"}</button></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default TodoList;