// Test.js
import { Suspense, lazy } from 'react';
import HookTest from './HookTest';
import CustomHook from './customHook';
import ContextTest from './ContextTest';
import RefTest from './RefTest';
import Transition from './Transition';
import DeferredUI from './DeferredUI';
import SuspenseTest from './SuspenseTest';
import ExternalStoreTest from './ExternalStoreTest';

// 组件不用异步加载就没问题
const ImportComponent = lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./ImportComp'));
    }, 1000);
}));

function Test() {
    return (
        <>
            <Suspense fallback={<div>loading</div>}>
                <ImportComponent />
            </Suspense>
            <CustomHook></CustomHook>
            <HookTest />
            <ContextTest />
            <RefTest />
            <DeferredUI />
            <Transition />
            <SuspenseTest />
            <ExternalStoreTest />
        </>
    );
}

export default Test;
