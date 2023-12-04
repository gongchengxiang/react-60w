import { useState, useSyncExternalStore } from 'react';

const externalStore = function () {
    let todos = ['init'];
    let listeners = [];
    const update = () => {
        listeners.forEach((listener) => {
            listener();
        });
    };
    return {
        addTodo(todo) {
            if (!todos.includes(todo)) {
                todos = [...todos, todo];
            }
            update();
        },
        removeTodo() {

        },
        getTodos() {
            return todos;
        },
        subscribe(listener) {
            console.log('listener', listener);
            listeners = [...listeners, listener];
            return () => {
                listeners = listeners.filter(l => l !== listener);
            };
        },
    };
};
const store = externalStore();

function useTodo() {
    const todos = useSyncExternalStore(store.subscribe, () => store.getTodos());
    console.log(todos);
    return [todos, store.addTodo];
}

function TodoAdd() {
    const [input, setInput] = useState();
    const [,addTodo] = useTodo();
    const add = () => {
        addTodo(input);
        setInput('');
    };
    return (
        <div>
            <input value={input}type="text" onChange={e => setInput(e.target.value)} />
            <button onClick={add}>add</button>
        </div>
    );
}

export default function ExternalStoreTest() {
    console.log('ExternalStoreTest');
    const [todos] = useTodo();

    return (
        <div>
            <br />
            <div>ExternalStoreTest</div>
            <TodoAdd />
            {todos.length % 2 === 0 && <TodoAdd />}
            <ul>
                {todos.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </div>
    );
}
