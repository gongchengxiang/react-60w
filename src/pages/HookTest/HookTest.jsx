import { useEffect, useRef, useState } from 'react';
import LocalStorageTest from './LocalStorageTest';

function Test1() {
    const [num, setNum] = useState(() => 0);
    // console.log(num);
    const add = () => {
        setNum(num + 1);
    };
    const reduce = () => {
        setNum(num - 1);
    };

    return (
        <>
            <button onClick={reduce} type="button">-</button>
            <span>
        &nbsp;
                {num}
        &nbsp;
            </span>
            <button onClick={add} type="button">+</button>
        </>
    );
}

function LocalStorageDataTest() {
    const refKey = useRef('');
    const refValue = useRef('');
    const [key, setKey] = useState('');
    const [value, setValue] = useState('');
    const [kvList, setKvList] = useState([]);

    useEffect(() => {
        const keyValue = localStorage.getItem(key) || '';
        if (key)
            localStorage.setItem(key, keyValue);

        setValue(keyValue);
    }, [key]);

    useEffect(() => {
        if (key)
            localStorage.setItem(key, value);

        refValue.current.value = value;
        const list = Object.keys(localStorage).map(k => ({
            key: k,
            value: localStorage.getItem(k) || '',
        }));
        setKvList(list);
    }, [key, value]);

    const submitKey = (e) => {
        if (e.keyCode === 13)
            setKey(refKey.current.value);
    };

    const submitValue = (e) => {
        if (e.keyCode === 13 && key)
            setValue(refValue.current.value);
    };

    return (
        <>
            <div>localStorage测试</div>
            <div>
                key:
                <input ref={refKey} type="text" onKeyUp={submitKey} />
            </div>
            <div>
                value:
                <input ref={refValue} type="text" onKeyUp={submitValue} />
            </div>
            <ul>
                <br />
                map:
                {kvList.map(e => (
                    <li key={e.key}>
                        {e.key}
                        :
                        {e.value}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default function HookTest() {
    return (
        <div className="hook-test">
            <p>hooktest</p>
            <Test1 />
            <br />
            <br />
            <br />
            <LocalStorageDataTest />
            <br />
            <br />
            <br />
            <LocalStorageTest />
            <br />
            <br />
            <br />
        </div>
    );
}
