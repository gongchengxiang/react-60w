import {useEffect, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';
import ClassComp from './ClassComp';
import TabTest from './TabTest';
import ContextTest from './Context';
import './App.scss';
import Divider from '../../components/Divider';
import LazyTest from './LazyTest';
import A1 from './A1';

function App() {
  const wrap = document.querySelector('.app-content');
  const appName = 'react-test';
  const list = ['a', 'b', 'c'];
  const [a, setA] = useState('1');
  const [a1, setA1] = useState('1');
  const z = useMemo(
    () => a,
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setA('3');
    }, 4000);
  }, []);

  useEffect(() => {
    if (!wrap) {
      setTimeout(() => {
        console.log(111112222);
        setA1('2');
      });
    }
  }, []);
  const appJsx = (
    <div className={appName}>
      <div>{appName}</div>
      <div>{list.length > 5 ? 'long' : 'short'}</div>
      <ul>
        {list.map((e) => (
          <li className={2} key={e}>{e}</li>
        ))}
      </ul>
      <Divider name="divider-test" bgColor="#f5f5f5" />
      <ClassComp testProp="test-prop" />
      <Divider />
      <TabTest />
      <Divider />
      <ContextTest />
      <br />
      <LazyTest />
      <A1 />
      zlength:
      {z}
    </div>
  );

  if (wrap) {
    return ReactDOM.createPortal(appJsx, wrap);
  }
}

export default App;
