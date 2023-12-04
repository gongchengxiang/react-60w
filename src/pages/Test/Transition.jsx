import { useState, useTransition } from 'react';

function SlowTabItem() {
    const start = performance.now();
    while (performance.now() - start < 500) {
        // 卡住2mm
    }
    return <div>slow tab item</div>;
}

export default function Transition() {
    const [tab, setTab] = useState('a');
    const [tabText, setTabText] = useState(tab.toUpperCase());
    const [isPending, startTransition] = useTransition();
    const change = (v) => {
        setTabText(v.toUpperCase());
        startTransition(() => {
            setTab(v);
        });
    };
    return (
        <div>
            <br />
            Transition
            <button style={{ width: 40 }} onClick={() => change('a')}>a</button>
            <button style={{ width: 40 }} onClick={() => change('b')}>b</button>
            <button style={{ width: 40 }} onClick={() => change('c')}>c</button>
            <div>{tabText}</div>
            {tab === 'a' && <div>a</div>}
            {tab === 'b' && <SlowTabItem />}
            {tab === 'c' && <div>c</div>}
        </div>
    );
}
