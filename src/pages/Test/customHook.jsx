import { useEffect, useState } from 'react';

const customState = function () {
    const state = {
        value: null,
        ininValue: null,
    };

    const refresh = () => {
        state.value = state.ininValue;
    };

    return function (ininValue) {
        if (state.ininValue === null) {
            state.ininValue = ininValue;
            state.value = ininValue;
        }
        const [v, f] = useState(true);
        useEffect(() => {
            return () => {
                refresh();
            };
        }, []);
        const setState = (value) => {
            state.value = value;
            f(!v);
        };
        return [state.value, setState];
    };
};
const useCustomState = customState();

export default function CustomHook() {
    const [num, setNum] = useState(0);
    const [count, setCount] = useCustomState(0);
    return (
        <div>
            <div onClick={() => setNum(num + 1)}>
                num:
                {num}
            </div>
            <span onClick={() => setCount(count + 1)}>
                count:
                {count}
            </span>
        </div>
    );
}
