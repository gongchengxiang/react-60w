import {
  createBrowserRouter, RouterProvider,
} from 'react-router-dom';
import AppLayout from '../pages/AppLayout';
import App from '../pages/App/App';
import TodoOutlet, {TodoClass, TodoHook} from '../pages/Todo';

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
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}
