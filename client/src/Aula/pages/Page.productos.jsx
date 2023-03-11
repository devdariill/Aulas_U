import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductoCard from '../components/ProductoCard'
import { useAulas } from '../context/ProductoContext'
// import Search from "../../components/Search";
import Search from '../components/Search'
function Productos() {
  const navigate = useNavigate()
  const { productos, loadProductos } = useAulas()
  useEffect(() => {
    loadProductos()
  }, [])
  return (
    <div>
      <div className='grid grid-cols-2 justify-between items-center gap-3'>
        <p className='text-center bg-zinc-800  rounded-md p-1  font-extrabold mb-3'>
          Productos
        </p>
        <a
          className='bg-zinc-600 p-1 text-center rounded-md w-full border-none font-semibold mb-3 cursor-pointer'
          onClick={() => navigate('/productos/add')}
        >
          Crear Producto
        </a>
      </div>
      {productos.length > 0 ? (
        <div>
          <Search />
          <div className='grid grid-cols-3 text-center mt-2'>
            <p>Codigo</p>
            <p>Costo</p>
            <p>Precio</p>
            <p />
          </div>
          {productos.map((producto) => (
            <ProductoCard key={producto.codprod} producto={producto} />
          ))}
        </div>
      ) : (
        <p className='text-center'>No hay productos</p>
      )}
    </div>
  )
}
export default Productos
