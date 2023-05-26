import { useSelector } from 'react-redux';
import store from '../redux/store';
import { filterTodo } from '../redux/actions';

function TodoFilter() {


    const myTodoFilter = state => state.filter;
    const filter = useSelector(myTodoFilter);


    const handleFilter = (type) => {
        store.dispatch(filterTodo(type));
        console.log(myTodoFilter);
        console.log(filter);
    }

    return (
        <div className="filterDiv flexDisplay">
            {
                filter === 'SHOW_ALL' ? <h3>All</h3> :
                    filter === 'SHOW_COMPLETED' ? <h3>Completed</h3> :
                        filter === 'SHOW_PENDING' ? <h3>Pending</h3> :
                            <h3>No Items</h3>
            }

            <div>
                {filter !== 'NO_ITEMS' && filter !== 'SHOW_PENDING' && <button onClick={() => { handleFilter('SHOW_PENDING') }}>Show Pending</button>}
                {filter !== 'NO_ITEMS' && filter !== 'SHOW_COMPLETED' && <button onClick={() => { handleFilter('SHOW_COMPLETED') }}>Show Completed</button>}
                {filter !== 'NO_ITEMS' && filter !== 'SHOW_ALL' && <button onClick={() => { handleFilter('SHOW_ALL') }}>Show All</button>}
            </div>
        </div>
    );
}

export default TodoFilter;