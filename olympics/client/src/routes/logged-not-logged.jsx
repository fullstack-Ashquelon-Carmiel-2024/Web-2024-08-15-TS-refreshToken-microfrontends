import { Outlet, Navigate } from 'react-router-dom';

export const LoggedRoutes = ({role}) => {

    return role !== 'guest' ? <Outlet /> 
         : <Navigate to='/auth/login' />

}

export const NotLoggedRoutes = ({role}) => {

    return role === 'guest' ? <Outlet /> : <Navigate to="/" />

}