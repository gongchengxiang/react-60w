import React from 'react';
import getCurrentId from '../../../common/util';

export default class TodoClass extends React.Component {
    state = {
        title: 'todo-class',
        todoList: [],
        checkAll: false,
        inputValue: '',
        errMsg: '',
        currentType: 'all',
    };

    componentDidMount() {
        const todoListStr = localStorage.getItem('todoList');
        if (todoListStr) {
            const todoList = JSON.parse(todoListStr);
            this.setState({
                todoList,
                checkAll: !!todoList.find(e => e.status === 'completed'),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todoList !== this.state.todoList) {
            try {
                localStorage.setItem('todoList', JSON.stringify(this.state.todoList));
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    inputValue = (e) => {
        this.setState({
            inputValue: e.target.value,
            errMsg: '',
        });
    };

    enterValue = (e) => {
        if (e.keyCode === 13)
            this.addTodo();
    };

    clearInputValue = () => {
        this.setState({
            inputValue: '',
        });
    };

    addTodo = () => {
        const { inputValue, todoList, currentType } = this.state;
        if (!inputValue) {
            this.setState({
                errMsg: '请输入todo',
            });
            return;
        }
        if (todoList.find(e => e.text === inputValue)) {
            this.setState({
                errMsg: '请输入非重复todo',
            });
            return;
        }
        const newTodoList = [{ text: inputValue, id: getCurrentId() }, ...todoList];
        const currentList = {
            all: newTodoList,
            todo: newTodoList.filter(e => e.status !== 'completed'),
            completed: newTodoList.filter(e => e.status === 'completed'),
        }[currentType];
        this.setState({
            todoList: newTodoList,
            inputValue: '',
            checkAll: !!currentList.find(e => e.status === 'completed'),
        });
    };

    clearTodo = (item) => {
        const { todoList, currentType } = this.state;
        const newTodoList = todoList.filter(e => e !== item);
        const currentList = {
            all: newTodoList,
            todo: newTodoList.filter(e => e.status !== 'completed'),
            completed: newTodoList.filter(e => e.status === 'completed'),
        }[currentType];
        this.setState({
            todoList: newTodoList,
            checkAll: !!currentList.find(e => e.status === 'completed'),
        });
    };

    checkTodo = (item) => {
        const { todoList, currentType } = this.state;
        const targetTodo = todoList.find(e => e === item);
        targetTodo.status = item.status === 'completed' ? 'todo' : 'completed';
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[currentType];
        this.setState({
            todoList,
            checkAll: !!currentList.find(e => e.status === 'completed'),
        });
    };

    checkAllTodo = () => {
        const { checkAll, todoList, currentType } = this.state;
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[currentType];
        currentList.forEach((item) => {
            const current = item;
            current.status = checkAll ? 'todo' : 'completed';
        });
        this.setState({
            todoList,
            checkAll: currentList.length ? !checkAll : false,
        });
    };

    changeCurrentType = (type) => {
        const { todoList } = this.state;
        const currentList = {
            all: todoList,
            todo: todoList.filter(e => e.status !== 'completed'),
            completed: todoList.filter(e => e.status === 'completed'),
        }[type];
        this.setState({
            currentType: type,
            checkAll: !!currentList.find(e => e.status === 'completed'),
        });
    };

    render() {
        const {
            title,
            checkAll,
            todoList,
            inputValue,
            errMsg,
            currentType,
        } = this.state;
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
                                onClick={this.checkAllTodo}
                            />
                        </div>
                        <input
                            type="text"
                            className={`${errMsg ? 'with-err' : ''} todo-input`}
                            value={inputValue}
                            onInput={this.inputValue}
                            onKeyUp={this.enterValue}
                        />
                        <div className="clear-btn" onClick={this.clearInputValue}>×</div>
                        <div className="add-btn" onClick={this.addTodo}>+</div>
                    </div>
                    {/* 内容 */}
                    <ul className="content">
                        {currentList.map(item => (
                            <li className="todo-item" key={item.id}>
                                <div className="check">
                                    <span
                                        className={`check-btn ${item.status === 'completed' ? 'active' : ''}`}
                                        onClick={() => this.checkTodo(item)}
                                    />
                                </div>
                                <div className="todo-text" title={item.text}>
                                    {item.text}
                                </div>
                                <div className="delete" onClick={() => this.clearTodo(item)}>×</div>
                            </li>
                        ))}
                        {!currentList.length && (
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
                        )}
                    </ul>
                    {/* 页尾统计 */}
                    <div className="footer">
                        <div
                            className={getStatisticItemClass('all')}
                            onClick={() => this.changeCurrentType('all')}
                        >
                            总计：
                            <span>{todoList.length}</span>
                        </div>
                        <div
                            className={getStatisticItemClass('todo')}
                            onClick={() => this.changeCurrentType('todo')}
                        >
                            待完成：
                            <span>{todoList.filter(e => e.status !== 'completed').length}</span>
                        </div>
                        <div
                            className={getStatisticItemClass('completed')}
                            onClick={() => this.changeCurrentType('completed')}
                        >
                            已完成：
                            <span>{todoList.filter(e => e.status === 'completed').length}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
