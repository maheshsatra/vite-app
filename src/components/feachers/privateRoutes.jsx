import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import Header from '../header/Header'

function PrivateRoutes() {
    const token = useAuth()
    return token ? <><Header /><Outlet /></>: <Navigate to='/' />
}

export default PrivateRoutes
