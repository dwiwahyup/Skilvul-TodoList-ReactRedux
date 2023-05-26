import { useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

import store from './redux/store';

function App() {

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            console.log(store.getState());
        })
        return unsubscribe;
    }, []);

    return (
        <div className="App">
            <h1>What's Plan For Today?</h1>
            <TodoInput />
            <TodoFilter />
            <TodoList />
        </div>
    );
}

export default App;
