import { memo, useDeferredValue, useMemo, useState } from 'react';

function SlowText({ text }) {
    console.log('child text', text);
    const start = performance.now();
    while (performance.now() - start < 200) {
        // 卡住2mm
    }
    return <span>{text}</span>;
}
const MemoChild = memo(SlowText);

export default function DeferredUI() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const deferredValue = useDeferredValue(text);
    const onChange = (e) => {
        setText(e.target.value);
    };
    console.log(11, deferredValue);
    const MemoChild = useMemo(() => {
        return <SlowText text={deferredValue} />;
    }, [deferredValue]);

    return (
        <div>
            DeferredUI
            <div onClick={() => setCount(count + 1)}>{count}</div>
            <input value={text} onChange={onChange} />
            {MemoChild}
        </div>
    );
}
