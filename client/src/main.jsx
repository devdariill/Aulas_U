import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UsuarioContextProvider } from './Usuario/context/UsuariosContext'
import { IndexContextProvider } from './context/IndexContext'
import { ProductoContextProvider } from './Producto/context/ProductoContext'
import { CookieContextProvider } from './Cookie/context/CookieContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IndexContextProvider>
      <UsuarioContextProvider>
        <ProductoContextProvider>
          <CookieContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CookieContextProvider>
        </ProductoContextProvider>
      </UsuarioContextProvider>
    </IndexContextProvider>
  </React.StrictMode>
)
