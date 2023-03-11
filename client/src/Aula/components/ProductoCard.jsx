/* eslint-disable indent */
import { useNavigate, useLocation } from 'react-router-dom'
function ProductoCard({ producto }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(productoVenta);
  // }, [productoVenta]);
  return (
    <div className='my-2'>
      <button
        className='block bg-zinc-600 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer'
        // onClick={() => (console.log(pathname))}
        onClick={
          () => {
            if (pathname === '/productos') {
              navigate(`/productos/edit/${producto.codprod}`)
            }
          }
          // pathname === '/productos'
          //   ? navigate(`/productos/edit/${producto.codprod}`)
          //   : pathname === '/ventas/add'
          //   ? setProductoVenta(producto)
          //   : pathname === '/compras/add' && setProductoCompra(producto)
          // eslint-disable-next-line react/jsx-curly-newline
        }
      >
        {producto.nomprod}
      </button>
      <div className='grid grid-cols-3 text-center'>
        <p>{producto.codprod}</p>
        <p>{producto.cosulc}</p>
        <p>
          {producto.venprod}
          {/* {producto.pvenfra.toLocaleString() > 0 ? `-${producto.pvenfra}` : ""}  */}
        </p>
      </div>
    </div>
  )
}
export default ProductoCard
