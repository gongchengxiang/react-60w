import {useRef} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function LocalStorageTest() {
  const refKey = useRef('');
  const refValue = useRef('');
  const [obj, setItem] = useLocalStorage({zzz: 'cnm'});
  const submitKey = (e) => {
    if (e.keyCode === 13) {
      const value = obj[refKey.current.value] || '';
      refValue.current.value = value;
      setItem(refKey.current.value, value);
    }
  };

  const submitValue = (e) => {
    if (e.keyCode === 13) {
      const key = refKey.current.value;
      if (key) {
        setItem(key, refValue.current.value);
      }
    }
  };
  return (
    <>
      <div>localStorage hook测试</div>
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
        {Object.keys(obj).map((key) => (
          <li key={key}>
            {key}
            :
            {obj[key]}
          </li>
        ))}
      </ul>
    </>
  );
}
