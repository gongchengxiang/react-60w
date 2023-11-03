// App.js
import {Suspense, lazy} from 'react';

// 组件不用异步加载就没问题
const ImportComponent = lazy(() => import('./ImportComp'));

function App() {
  console.log(0);
  return (
    <Suspense fallback={<div>最外层</div>}>
      <ImportComponent />
    </Suspense>
  );
}

export default App;
