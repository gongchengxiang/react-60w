import {useEffect, useState, useRef} from 'react';

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
  // const data = useLocalStorage();
  const refKey = useRef('');
  const refValue = useRef('');

  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [kvList] = useState([]);
  console.log(0, value);
  const changeKey = (e) => {
    if (e.keyCode === 13) {
      setKey(refKey.current.value);
    }
  };
  const changeValue = (e) => {
    if (e.keyCode === 13) {
      setValue(refValue.current.value);
    }
  };

  // useEffect(() => {

  // }, [key]);

  useEffect(() => {
    if (key) {
      localStorage.setItem(key, value);
    }
    // const keyValue = localStorage.getItem(key) || '';
    // setValue(keyValue);
    refValue.current.value = value;
  }, [key, value]);

  return (
    <>
      <div>localStorage测试</div>
      <div>
        key:
        <input ref={refKey} type="text" onKeyUp={changeKey} />
      </div>
      <div>
        value:
        <input ref={refValue} type="text" onKeyUp={changeValue} />
      </div>
      <ul>
        {kvList.map((e) => (
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
    </div>
  );
}
