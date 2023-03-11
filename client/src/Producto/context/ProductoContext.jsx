import { useContext, useState, createContext } from 'react'
import {
  createProductoRequest,
  deleteProductoRequest,
  getProductosRequest,
  getProductoRequest,
  updateProductoRequest,
  lastCodeRequest,
  searchProductosRequest
} from '../api/productos.api'
export const ProductoContext = createContext()
export const useProductos = () => {
  const context = useContext(ProductoContext)
  if (!context) {
    throw new Error(
      'useProductos debe estar dentro de un ProductoContextProvider'
    )
  }
  return context
}
export const ProductoContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([])
  async function loadProductos () {
    const res = await getProductosRequest()
    setProductos(res.data)
  }
  const deleteProducto = async (codprod) => {
    try {
      await deleteProductoRequest(codprod)
      // TODO : study this REFRESH LIST OF PRODUCTOS
      setProductos(productos.filter((producto) => producto.codprod !== codprod))
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoCard.jsx ~ line 8 ~ handleDelete ~ error',
        error
      )
    }
  }
  const createProducto = async (producto) => {
    try {
      await createProductoRequest(producto)
      // add new producto to the list
      // setProductos([...productos, res.data]);
      // # se envian datos pero al navigate se demora en actualizar y ya se tienen los ultimos productos en el array
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoForm.jsx ~ line 32 ~ onSubmit = ~ error',
        error
      )
    }
  }
  // TODO : CACHE  CODPROD MAX
  // async function startVal() {
  const lastCodProd = async () => {
    try {
      const res = await lastCodeRequest()
      const codProd = parseInt(res.data.codprod) + 1 || -1
      return codProd
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoContext.jsx ~ line 65 ~ lastCodProd ~ error',
        error
      )
    }
  }
  const getProducto = async (codprod) => {
    try {
      const res = await getProductoRequest(codprod)
      return res.data
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoContext.jsx ~ line 67 ~ getProducto ~ error',
        error
      )
    }
  }
  const updateProducto = async (codprod, producto) => {
    try {
      await updateProductoRequest(codprod, producto)
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoContext.jsx ~ line 67 ~ getProducto ~ error',
        error.response
      )
    }
  }
  const searchProductos = async (searchInput) => {
    try {
      // console.log(
      //   "🚀 ~ file: ProductoContext.jsx ~ line 106 ~ searchProductos ~ searchInput",
      //   searchInput
      // );
      const res = await searchProductosRequest(searchInput)
      setProductos(res.data)
    } catch (error) {
      console.log(
        '🚀 ~ file: ProductoContext.jsx ~ line 109 ~ searchProductos ~ error',
        error
      )
    }
  }
  return (
    <ProductoContext.Provider
      value={{
        productos,
        loadProductos,
        deleteProducto,
        createProducto,
        lastCodProd,
        getProducto,
        updateProducto,
        searchProductos
      }}
    >
      {children}
    </ProductoContext.Provider>
  )
}
