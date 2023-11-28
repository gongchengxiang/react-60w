import { useEffect } from 'react'

import {
    NavLink,
    Outlet,
    useLocation,
    useNavigate,
} from 'react-router-dom'

import reactLogo from '../image/logo192.png'

export default function AppLayout() {
    const getNavLinkClass = (status) => {
        let className = 'nav-item'
        if (status.isActive)
            className += ' active'
        else if (status.isPending)
            className += ' pending'

        return className
    }

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/')
            navigate('/app')
    }, [location])

    return (
        <div className="app-layout">
            <div className="nav">
                <div className="logo">
                    <img src={reactLogo} alt="logo" />
                    <h1>React Demo</h1>
                </div>
                <NavLink
                    to="/app"
                    className={getNavLinkClass}
                >
                    app
                </NavLink>
                <NavLink
                    to="/hook"
                    className={getNavLinkClass}
                >
                    hook
                </NavLink>
                <NavLink
                    to="/todo/class"
                    className={getNavLinkClass}
                >
                    todo/class
                </NavLink>
                <NavLink
                    to="/todo/hook"
                    className={getNavLinkClass}
                >
                    todo/hook
                </NavLink>
                <NavLink
                    to="/asyncComp"
                    className={getNavLinkClass}
                >
                    asyncComp
                </NavLink>
                <NavLink
                    to="/test"
                    className={getNavLinkClass}
                >
                    test
                </NavLink>
            </div>
            <div className="app-content">
                <Outlet />
            </div>
        </div>
    )
}
