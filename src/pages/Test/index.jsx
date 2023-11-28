// App.js
import { Suspense, lazy } from 'react';
import CustomHook from './customHook';

// 组件不用异步加载就没问题
const ImportComponent = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./ImportComp'));
    }, 1000);
}));

function App() {
    console.log(0);
    return (
        <>
            <Suspense fallback={<div>loading</div>}>
                <ImportComponent />
            </Suspense>
            <CustomHook></CustomHook>
        </>
    );
}

export default App;
