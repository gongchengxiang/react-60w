import {useState, useEffect} from 'react';

export default function useLocalStorage(defalut = {}) {
  const [obj, setObj] = useState(defalut);
  useEffect(() => {
    const localMap = {};
    Object.keys(localStorage).forEach((key) => {
      localMap[key] = localStorage.getItem(key);
    });
    const newMap = {
      ...localMap,
      ...obj,
    };
    Object.keys(newMap).forEach((key) => {
      localStorage.setItem(key, newMap[key] || '');
    });
    setObj(newMap);
    console.log(1);
  }, []);
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setObj({
      ...obj,
      ...{[key]: value},
    });
    console.log(2);
  };
  return [obj, setItem];
}

// const [obj, setValue] = useLocalStorage(defalut);
