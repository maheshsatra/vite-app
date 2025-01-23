import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './useAuth'
import Header from '../header/Header'

function PublicRoutes() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <><Outlet /></>
}

export default PublicRoutes
