import { useRef, useSyncExternalStore } from 'react';

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
        },
    };
};
const store = externalStore();
function useTodo() {
    const todos = useSyncExternalStore(store.subscribe, () => store.getTodos());
    return [todos, store.addTodo];
}

function TodoAdd() {
    const ref = useRef();
    const [,addTodo] = useTodo();
    const add = () => {
        addTodo(ref.current.value);
    };
    return (
        <div>
            <input type="text" ref={ref} />
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
            <TodoAdd />
            <ul>
                {todos.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </div>
    );
}
