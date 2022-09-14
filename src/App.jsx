function App() {
    const appName = 'react-app';
    const list = ['a', 'b', 'c'];
    return (
        <div className={appName}>
            <div>{appName}</div>
            <div>{appName.length > 5 ? 'long' : 'short'}</div>
            <ul>
                {list.map((e) => (
                    <li className={2}>{e}</li>
                ))}
            </ul>
            <div />
        </div>
    );
}

export default App;
