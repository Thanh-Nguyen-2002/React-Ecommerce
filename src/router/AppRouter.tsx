import { useRoutes , Navigate } from 'react-router-dom';
import Login from '../features/auth/components/Login';
import Register from '../features/auth/components/Register';
const AppRouter = () => {

    const router = [
        {
            path: '/login',
            element : <Login />
        },
        {
            path: '/register',
            element : <Register />
        },
        {path : '*', element : <Navigate to="/" />},
    ]
    return (
        useRoutes(router)
    )
}

export default AppRouter;