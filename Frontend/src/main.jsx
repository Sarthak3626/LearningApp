import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import RoutePath from './Routepath'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RoutePath/>
  </StrictMode>,
)
