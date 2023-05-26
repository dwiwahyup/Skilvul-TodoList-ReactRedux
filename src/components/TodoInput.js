import { useRef } from 'react';
import store from '../redux/store';
import { addTodo } from '../redux/actions';

function TodoInput() {
    const input = useRef();


    const handleAddTodo = () => {
        if (input.current.value !== '') {
            store.dispatch(addTodo(input.current.value));
            input.current.value = '';
            input.current.focus();
        }
    }

    return (
        <div>
            <input type="text" placeholder="Title" ref={input} autoFocus={true} />
            <button onClick={handleAddTodo}>ADD</button>
        </div>
    );
}

export default TodoInput;