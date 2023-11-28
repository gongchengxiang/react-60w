import { useEffect, useState } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';
import getCurrentId from '../../../common/util';

export default function TodoHook() {
    const [init, setInit] = useState(false);
    const [data, setData] = useLocalStorage();

    const [title] = useState('todo-hook');
    const [todoList, setTodoList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [currentType, setCurrentType] = useState('all');

    useEffect(() => {
        if (data._init && !init) {
            const localTodo = JSON.parse(data.todoList || null) || [];
            setTodoList(localTodo);
            setCheckAll(!!localTodo.find(e => e.status === 'completed'));
            setInit(true);
        }
    }, [data]);

    useEffect(() => {
        if (init)
            setData('todoList', JSON.stringify(todoList));
    }, [todoList]);

    const onInput = (e) => {
        setInputValue(e.target.value);
        setErrMsg('');
    };

    const clearInputValue = () => {
        setInputValue('');
    };

    const addTodo = () => {
        if (!inputValue) {
            setErrMsg('请输入todo');
            return;
        }
        if (todoList.find(e => e.text === inputValue)) {
            setErrMsg('请输入非重复todo');
            return;
        }
        const newTodoList = [{ text: inputValue, id: getCurrentId() }, ...todoList];
        const currentList = {
            all: newTodoList,
            todo: newTodoList.filter(e => e.status !== 'completed'),
            completed: newTodoList.filter(e => e.status === 'completed'),
        }[currentType];

        setTodoList(newTodoList);
        setInputValue('');
        setCheckAll(!!currentList.find(e => e.status === 'completed'));
    };

    const clearTodo = (item) => {
        const newTodoList = todoList.filter(e => e !== item);
        const currentList = {
            all: newTodoList,
            todo: newTodoList.filter(e => e.status !== 'completed'),
            completed: newTodoList.filter(e => e.status === 'completed'),
        }[currentType];

        setTodoList(newTodoList);
        setCheckAll(!!currentList.find(e => e.status === 'completed'));
    };

    const checkTodo = (item) => {
        const targetTodo = todoList.find(e => e === item);
        targetTodo.status = item.status === 'completed' ? 'todo' : 'completed';
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[currentType];
        setTodoList([...todoList]);
        setCheckAll(!!currentList.find(e => e.status === 'completed'));
    };

    const checkAllTodo = () => {
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[currentType];
        currentList.forEach((item) => {
            const current = item;
            current.status = checkAll ? 'todo' : 'completed';
        });
        setTodoList([...todoList]);
        setCheckAll(currentList.length ? !checkAll : false);
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13)
            addTodo();
    };

    const changeCurrentType = (type) => {
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[type];

        setCurrentType(type);
        setCheckAll(!!currentList.find(e => e.status === 'completed'));
    };

    const currentList = {
        all: todoList,
        todo: todoList.filter(e => e.status !== 'completed'),
        completed: todoList.filter(e => e.status === 'completed'),
    }[currentType];

    const getStatisticItemClass = type => (`statistic-item ${
    type === currentType ? 'active' : ''
  }`);

    return (
        <>
            <div>
                {title}
            </div>

            <div className="todo">
                {/* 错误提示 */}
                {errMsg && <p className="err-msg">{errMsg}</p>}
                {/* 输入框 */}
                <div className="header">
                    <div className="check">
                        <span
                            className={`check-btn ${checkAll ? 'active' : ''}`}
                            onClick={checkAllTodo}
                        />
                    </div>
                    <input
                        type="text"
                        className={`${errMsg ? 'with-err' : ''} todo-input`}
                        value={inputValue}
                        onInput={onInput}
                        onKeyUp={onKeyUp}
                    />
                    <div className="clear-btn" onClick={clearInputValue}>×</div>
                    <div className="add-btn" onClick={addTodo}>+</div>
                </div>
                {/* 内容 */}
                <ul className="content">
                    {currentList.map(item => (
                        <li className="todo-item" key={item.id}>
                            <div className="check">
                                <span
                                    className={`check-btn ${item.status === 'completed' ? 'active' : ''}`}
                                    onClick={() => checkTodo(item)}
                                />
                            </div>
                            <div className="todo-text" title={item.text}>
                                {item.text}
                            </div>
                            <div className="delete" onClick={() => clearTodo(item)}>×</div>
                        </li>
                    ))}
                    {
            !currentList.length && (
                <div className="no-data-tip">
                    【
                    {{
                        all: '总计',
                        todo: '待完成',
                        completed: '已完成',
                    }[currentType]}
                    】
                    暂无todo
                </div>
            )
          }
                </ul>
                {/* 页尾统计 */}
                <div className="footer">
                    <div
                        className={getStatisticItemClass('all')}
                        onClick={() => changeCurrentType('all')}
                    >
                        总计：
                        <span>{todoList.length}</span>
                    </div>
                    <div
                        className={getStatisticItemClass('todo')}
                        onClick={() => changeCurrentType('todo')}
                    >
                        待完成：
                        <span>{todoList.filter(e => e.status !== 'completed').length}</span>
                    </div>
                    <div
                        className={getStatisticItemClass('completed')}
                        onClick={() => changeCurrentType('completed')}
                    >
                        已完成：
                        <span>{todoList.filter(e => e.status === 'completed').length}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
