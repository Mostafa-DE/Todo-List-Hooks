import UseLocalStorageState from './UseLocalStorageState';
import uuid from 'uuid/dist/v4';

// eslint-disable-next-line    
export default initialTodos => {
    const [todos, setTodos] = UseLocalStorageState("todos",initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };

    const removeTodo = (todoId) => {
        // filter out remove todo
        const updateTodos = todos.filter( todo => todo.id !== todoId);
        // call setTodos with new todos
        setTodos(updateTodos);
    };

    const isCompletedTodo = todoId => {
        const updateTodo = todos.map( todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updateTodo);
    }

    const editTodo = (todoId, newTask) => {
        const updateTodo = todos.map( todo => 
            todo.id === todoId ? {...todo, task: newTask} : todo
        );
        setTodos(updateTodo);
    }

    return {
        todos,
        addTodo,
        removeTodo,
        isCompletedTodo,
        editTodo
    }
}









