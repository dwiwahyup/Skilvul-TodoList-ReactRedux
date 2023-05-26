import { useRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { addTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

function TodoInput() {
    const dispatch = useDispatch();
    const input = useRef();

    const handleAddTodo = () => {
        if (input.current.value !== '') {
            dispatch(addTodo(input.current.value));
            input.current.value = '';
            input.current.focus();
        }
    };

    return (
        <InputGroup className="mb-3">
            <FormControl
                type="text"
                placeholder="Title"
                ref={input}
                autoFocus={true}
            />
            <Button variant="primary" onClick={handleAddTodo}>
                Add
            </Button>
        </InputGroup>
    );
}

export default TodoInput;
