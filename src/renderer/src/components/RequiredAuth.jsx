import { Outlet, Navigate, useLocation } from 'react-router-dom'

const RequiredAuth = () => {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const isLogin = token ? true : false
  return isLogin ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

export default RequiredAuth
