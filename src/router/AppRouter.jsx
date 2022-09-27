import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
} from 'react-router-dom';
import App from '../pages/App/App';
import {TodoClass, TodoHook} from '../pages/Todo/index';
import reactLogo from '../image/logo192.png';

const routesConfig = [
  {text: 'react-测试', path: '/app', element: () => <App />},
  {text: 'todo/class', path: '/todo/class', element: () => <TodoClass />},
  {text: 'todo/hook', path: '/todo/hook', element: () => <TodoHook />},
];

export default function AppRouter() {
  const getNavLinkClass = (status) => {
    let className = 'nav-item';
    if (status.isActive) {
      className += ' active';
    } else if (status.isPending) {
      className += ' pending';
    }
    return className;
  };
  return (
    <BrowserRouter>
      <div className="app-layout">
        <div className="nav">
          <div className="logo">
            <img src={reactLogo} alt="logo" />
            <h1>React Demo</h1>
          </div>
          {routesConfig.map((routeItem) => (
            <NavLink
              key={routeItem.path}
              to={routeItem.path}
              className={(status) => getNavLinkClass(status)}
            >
              {routeItem.text}
            </NavLink>
          ))}
        </div>
        <div className="app-content">
          <Routes>
            {routesConfig.map((routeItem) => (
              <Route
                key={routeItem.path}
                path={routeItem.path}
                element={routeItem.element()}
              />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
