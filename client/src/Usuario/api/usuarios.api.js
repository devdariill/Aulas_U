import axios from '../../libs/axios'

export const createUsuarioRequest = async (usuario) =>
  await axios.post('/usuarios', usuario)

export const getUsuarioRequest = async (usuario) =>
  await axios.post('/usuarios/login', usuario)

export const updateUsuarioRequest = async (nitter, usuario) =>
  await axios.put(`/usuarios/${nitter}`, usuario)

export const setCookieiRequest = async (token) =>
  await axios.get(`/usuarios/setcookie/${token}`)

export const profileRequest = async () => await axios.get('/usuarios/profile')
// // export const toggleTaskDoneRequest = async (codprod, done) =>
// //   await axios.put(`/Usuarios/${codprod}`, {
// //     done,
// //   });
