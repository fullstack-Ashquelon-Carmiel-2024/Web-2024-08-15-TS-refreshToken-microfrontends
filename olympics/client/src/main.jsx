import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { UserContextProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </UserContextProvider>
  </React.StrictMode>,
)
