import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../pages/AppLayout';
import App from '../pages/App/App';
import { HookTest } from '../pages/HookTest';
import TodoOutlet, { TodoClass, TodoHook } from '../pages/Todo';
import { XX } from '../pages/AsyncComp';
import Test from '../pages/Test';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: 'app',
                element: <App />,
            },
            {
                path: 'hook',
                element: <HookTest />,
            },
            {
                path: 'todo',
                element: <TodoOutlet />,
                children: [
                    {
                        path: 'class',
                        element: <TodoClass />,
                    },
                    {
                        path: 'hook',
                        element: <TodoHook />,
                    },
                ],
            },
            {
                path: 'asyncComp',
                element: <XX />,
            },
            {
                path: 'test',
                element: <Test />,
            },
        ],
    },
    {
        path: '*',
        element: <AppLayout />,
        children: [
            {
                path: '*',
                element: <div>404</div>,
            },
        ],
    },
]);

export default function AppRouter() {
    return (
        <RouterProvider router={router} />
    );
}
