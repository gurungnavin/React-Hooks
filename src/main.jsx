import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './hooks/06-useContext/UseContext.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>

        <App />
    </ContextProvider>
)
