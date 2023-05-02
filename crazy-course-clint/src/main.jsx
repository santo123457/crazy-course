import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './Contexts/ThemeProvider/ThemeProvider.jsx'
import AuthProvider from './Contexts/Authprovider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
