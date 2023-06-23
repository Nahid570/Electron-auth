import { Router, Route } from 'electron-router-dom'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Notes from '../pages/Notes'
import RequiredAuth from './RequiredAuth'
import RequireGuest from './ReguireGuest'
import UpdateNote from './updateNote'

const AppRoutes = () => {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<RequireGuest />}>
            <Route index element={<Login />} />
            <Route path="/reg" element={<Registration />} />
          </Route>
          <Route path="auth" element={<RequiredAuth />}>
            <Route index element={<Notes />} />
            <Route path="/auth/update-note" element={<UpdateNote />} />
          </Route>
        </>
      }
    />
  )
}

export default AppRoutes
