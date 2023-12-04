import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

function AutoFocusInput(props, ref) {
    const [count, setCount] = useState(0);
    const inpptRef = useRef();
    console.log(0);

    useImperativeHandle(ref, () => {
        // 此处执行时机和useLayoutEffect保持一致，在useInsertionEffect之后，useEffect之前
        console.log(111);
        return {
            focus() {
                inpptRef.current.focus();
            },
            add() {
                setCount(count + 1);
            },
        };
    }, [count]);
    useLayoutEffect(() => {
        console.log(1.6);
    }, [count]);
    useInsertionEffect(() => {
        console.log(1.5);
    }, [count]);
    useEffect(() => {
        console.log(1.7);
    }, []);
    useMemo(() => {
        console.log(3);
        return 11;
    }, []);
    console.log(2);
    return (
        <div>
            <div>auto focus input</div>
            <input type="text" ref={inpptRef} value={count} onChange={() => {}} />
        </div>
    );
}
const AutoFocusInput1 = forwardRef(AutoFocusInput);

export default function RefTest() {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const numRef = useRef(0);
    const forwordRef = useRef(null);
    useEffect(() => {
        console.log(inputRef);
        console.log(1, forwordRef);
    }, []);
    return (
        <div>
            <br />
            <div>ref test</div>
            <div onClick={() => { setCount(count + 1); }}>
                count:
                {count}
            </div>
            <input type="text" ref={inputRef} value={numRef.current} onChange={() => {}} />
            <span onClick={() => { numRef.current++; }}>ref add</span>

            <AutoFocusInput1 ref={forwordRef}></AutoFocusInput1>
            <span onClick={() => {
                forwordRef.current.add();
                forwordRef.current.focus();
            }}
            >
                add
            </span>
        </div>
    );
}
