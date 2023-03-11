import { useContext, useState, createContext } from 'react'
// import {
//   createProductoRequest,
// } from "../api/productos.api";
export const IndexContext = createContext()
export const useIndex = () => {
  const context = useContext(IndexContext)
  if (!context) {
    throw new Error('useIndex debe estar dentro de un IndexContextProvider')
  }
  return context
}
export const IndexContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const logout = () => setUser(null)
  return (
    <IndexContext.Provider
      value={{
        user,
        setUser,
        logout,
        open,
        setOpen,
        error,
        setError
      }}
    >
      {children}
    </IndexContext.Provider>
  )
}
