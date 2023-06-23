import { Outlet, Navigate, useLocation } from 'react-router-dom'

const RequireGuest = () => {
  const location = useLocation()
  const token = localStorage.getItem('token')
  const isLogin = token ? true : false
  return !isLogin ? <Outlet /> : <Navigate to="/auth" state={{ from: location }} replace />
}

export default RequireGuest
