import ClassComp from './ClassComp';
import TabTest from './TabTest';
import ContextTest from './Context';
import './App.scss';
import Divider from '../../components/Divider';
import LazyTest from './LazyTest';

function App() {
  const appName = 'react-test';
  const list = ['a', 'b', 'c'];
  return (
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

    </div>
  );
}

export default App;
