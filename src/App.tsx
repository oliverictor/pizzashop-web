import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './global.css'
import { routes } from './routes'
import { Toaster } from 'sonner'

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}

