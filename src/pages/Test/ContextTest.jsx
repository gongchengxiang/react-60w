import { createContext, useContext, useState } from 'react';

const RegionContext = createContext();

function ChildComp() {
    const { region, setRegion } = useContext(RegionContext);
    return (
        <div>
            <br />
            <div>context child</div>
            <div>{region}</div>
            <input
                value={region}
                type="text"
                onInput={(e) => {
                    setRegion(e.target.value);
                }}
            />
        </div>
    );
}

function OtherChild() {
    const { region } = useContext(RegionContext);
    return (
        <div>
            <div>other child</div>
            <div>{region}</div>
        </div>
    );
}
export default function ContextTest() {
    const [region, setRegion] = useState('bj');
    return (
        <div>
            <br />
            <div>context:</div>
            <RegionContext.Provider value={{ region, setRegion }}>
                <ChildComp></ChildComp>
                <OtherChild></OtherChild>
            </RegionContext.Provider>
        </div>
    );
}
