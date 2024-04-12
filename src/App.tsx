import { RouterProvider } from 'react-router-dom'
import './global.css'
import { routes } from './routes'

export function App() {

  return (
    <RouterProvider router={routes} />
  )
}

