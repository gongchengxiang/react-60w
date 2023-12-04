import { useReducer, useState } from 'react';

function reducer(state, action) {
    if (action.type === 'add') {
        return { value: state.value + 1 };
    }

    else if (action.type === 'dec') {
        return { value: state.value - 1 };
    }
};

function useValue(initValue) {
    const reducer = (state, action) => {
        if (action.type === 'update') {
            return action.value;
        }
    };
    const [value, dispatch] = useReducer(reducer, initValue);
    const setValue = (value) => {
        dispatch({ type: 'update', value });
    };
    return [value, setValue];
}

export default function HookTest() {
    const [a, setA] = useState(0);
    const [b, dispatch] = useReducer(reducer, { value: 0 });
    const [c, setC] = useValue(0);
    return (
        <div>
            <br />
            <div>hooktest</div>
            <div onClick={() => setA(a + 1)}>
                a:
                {a}
            </div>
            <div>
                b:
                {b.value}
                <span onClick={() => dispatch({ type: 'add' })}>add</span>
                &nbsp;
                <span onClick={() => dispatch({ type: 'dec' })}>dec</span>
            </div>
            <div onClick={() => setC(c + 1)}>
                c:
                {c}
            </div>
        </div>
    );
}
