// ImportComponent.js
import {
    lazy,
    useEffect,
    useMemo,
} from 'react';

const child = () => <div>child content</div>;

export default function AsyncComponent() {
    console.log(1);

    const ChildComponent = lazy(() => new Promise((resolve) => {
        setTimeout(() => {
            resolve({ default: child });
        }, 10);
    }));

    useEffect(() => {
        console.log('AsyncComponent mount');
    }, []);

    const LazyComponent = useMemo(() => {
        console.log('useMemo回调执行啦');
        return (
            // <Suspense fallback={<div>内层</div>}>
            //     <ChildComponent />
            // </Suspense>
            <>Suspense 奇怪问题</>
        );
    }, []);

    return <div className="App">{LazyComponent}</div>;
}
