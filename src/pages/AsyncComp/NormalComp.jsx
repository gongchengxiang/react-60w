import { useState } from 'react';
import Async1 from './Async1';

export default function NormalComp() {
    const [AsyncComp, setAsyncComp] = useState(null);
    const [status, setStatus] = useState(1);
    const getAsyncComp = () => {
        if (status !== 2) {
            setStatus(2);
            setTimeout(() => {
                import(/* webpackChunkName: "async-comp" */ './AsyncComp').then((data) => {
                    setAsyncComp({ C: data.default });
                    setStatus(3);
                });
            }, 1000);
        }
    };

    return (
        <div>
            <h4>normal comp && test async comp</h4>

            <br />
            <div>
                先用class方式自动加载一个
                <Async1 />
            </div>
            <br />

            <button type="button" onClick={getAsyncComp} disabled={status === 2}>
                {
          { 1: '加载异步组件', 2: '加载中', 3: '加载完成，重新加载' }[status]
        }
            </button>
            {AsyncComp?.C ? (status === 3 && <AsyncComp.C />) : null}

        </div>
    );
}
