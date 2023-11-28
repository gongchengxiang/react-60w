import { Outlet } from 'react-router-dom'
import TodoClass from './TodoClass/index'
import TodoHook from './TodoHook/index'
import './todo.scss'

export { TodoClass, TodoHook }

export default function TodoOutlet() {
    return <Outlet />
}
