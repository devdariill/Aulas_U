import axios from '../../libs/axios'

export const getProductosRequest = async () => await axios.get('/productos')

export const createProductoRequest = async (producto) =>
  await axios.post('/productos', producto)

export const deleteProductoRequest = async (codprod) =>
  await axios.delete(`/productos/${codprod}`)

export const getProductoRequest = async (codprod) =>
  await axios.get(`/productos/${codprod}`)
// TODO: STUDY THIS
export const updateProductoRequest = async (codprod, producto) =>
  await axios.put(`/productos/${codprod}`, producto)

// export const toggleTaskDoneRequest = async (codprod, done) =>
//   await axios.put(`/productos/${codprod}`, {
//     done,
//   });

export const lastCodeRequest = async () => await axios.get('/productos/last')

export const searchProductosRequest = async (listInput) =>
  await axios.post('/productos/search', listInput)
