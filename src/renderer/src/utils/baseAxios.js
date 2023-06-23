import axios from 'axios'

export const baseAxios = axios.create({
  // baseURL: 'http://localhost:5000/api/user'
  baseURL: 'https://electron-auth-server.vercel.app/api/user'
})
