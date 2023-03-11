import axios from '../../libs/axios'
import { useEffect, useContext, useState, createContext } from 'react'

import {
  createUsuarioRequest,
  getUsuarioRequest,
  updateUsuarioRequest,
  setCookieiRequest,
  profileRequest
} from '../api/usuarios.api'
import { useIndex } from '../../context/IndexContext'

export const UsuarioContext = createContext()
export const useUsuarios = () => {
  const context = useContext(UsuarioContext)
  if (!context) {
    throw new Error(
      'useUsuarios debe estar dentro de un UsuarioContextProvider'
    )
  }
  return context
}
// nomusu, clausu, nitter, nivusu, estusu, codcos, cosfij, codbod, bodfij, bodtra, agefij, empcod, tokusu
export const UsuarioContextProvider = ({ children }) => {
  const { setError } = useIndex()
  // loadUsuario
  const createUsuario = async (usuario) => {
    try {
      await createUsuarioRequest(usuario)
    } catch (error) {
      console.log(
        '🚀 ~ file: UsuariosContext.jsx:38 ~ createUsuario ~ error',
        error
      )
    }
  }
  const loginUsuario = async (usuario) => {
    try {
      // const remodelarApi = await axios.get(
      //   "/usuarios/setcookie/asd",
      //   { withCredentials: true }
      // );
      // localStorage.setItem("token", remodelarApi.data.token);
      const res = await getUsuarioRequest(usuario)
      return res

      // const res = await getUsuarioRequest(usuario);
      // console.log("RES+1",res)
      // console.log("RES+2",res.data.token)
      // const token = await setCookieiRequest(res.data.token);
      // console.log("token", token);
      // return res;
    } catch (error) {
      setError(JSON.stringify(error))
      console.log(
        '🚀 ~ file: UsuariosContext.jsx:48 ~ loginUsuario ~ error\n',
        error
      )
    }
  }
  const profileUsuario = async () => {
    try {
      const res = await profileRequest()
      return res
    } catch (error) {
      console.log(
        '🚀 ~ file: UsuariosContext.jsx:56 ~ profileUsuario ~ error',
        error
      )
    }
  }
  const [session, setSession] = useState(null)
  return (
    <UsuarioContext.Provider
      value={{
        createUsuario,
        loginUsuario,
        session,
        setSession,
        profileUsuario
      }}
    >
      {children}
    </UsuarioContext.Provider>
  )
}
