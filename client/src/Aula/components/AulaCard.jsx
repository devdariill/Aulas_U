/* eslint-disable indent */
import { useNavigate, useLocation } from 'react-router-dom'
function AulaCard({ aula }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(aulaVenta);
  // }, [aulaVenta]);
  return (
    <div className='my-2'>
      <button
        className='block bg-zinc-600 text-center rounded-md w-full border-none font-semibold py-1 cursor-pointer'
        // onClick={() => (console.log(pathname))}
        onClick={() => {
          if (pathname === '/aulas') {
            navigate(`/aulas/edit/${aula.codprod}`)
          }
        }}
      >
        {aula.nomprod}
      </button>
      <div className='grid grid-cols-3 text-center'>
        <p>{aula.codprod}</p>
        <p>{aula.cosulc}</p>
        <p>
          {aula.venprod}
          {/* {aula.pvenfra.toLocaleString() > 0 ? `-${aula.pvenfra}` : ""}  */}
        </p>
      </div>
    </div>
  )
}
export default AulaCard
