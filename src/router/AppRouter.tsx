import { useRoutes , Navigate } from 'react-router-dom';
import Login from '../features/auth/components/Login';
import Register from '../features/auth/components/Register';
import HomePage from '../features/homepages/components/HomePages';
const AppRouter = () => {

    const router = [
        {
            path : '/',
            element : <HomePage />
        },
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