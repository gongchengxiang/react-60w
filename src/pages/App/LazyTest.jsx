import { Suspense, lazy } from 'react';

const LazyComp = lazy(async () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('../../components/LazyComp'));
    }, 3000);
}));

export default function LazyTest() {
    return (
        <div>
            <h5>LazyTest</h5>
            <Suspense fallback={<div>loading...</div>}>
                <LazyComp />
            </Suspense>
        </div>
    );
}
