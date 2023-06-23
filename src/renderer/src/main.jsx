import ReactDOM from 'react-dom/client'
import '/index.css'
import App from './App'
import AppRoutes from './components/AppRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRoutes>
    <App />
  </AppRoutes>
)
