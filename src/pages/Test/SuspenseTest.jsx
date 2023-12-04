import { Suspense, useState, useTransition } from 'react';

const LazyComp = function (props) {
    return props.text;
};

export default function SuspenseTest() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [,startTransition] = useTransition();
    const onChange = (e) => {
        setCount(count + 1);
        startTransition(() => {
            setText(e.target.value);
        });
    };
    return (
        <div>
            <br />
            Suspense
            {count}
            <div><input type="text" onChange={onChange} /></div>
            <Suspense fallback={<div>lazy loading</div>}>
                <LazyComp text={text} />
            </Suspense>
        </div>
    );
}
