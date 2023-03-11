import { Link, useNavigate } from 'react-router-dom'
import { useIndex } from '../context/IndexContext'
function URLRutas() {
  const navigate = useNavigate()
  const { setOpen } = useIndex()

  const rutas = [{ name: 'Aulas', path: '/aulas' }]
  return (
    <div className='items-center justify-center w-full mx-auto'>
      <div
        className='justify-center items-center flex flex-col gap-y-5 overflow-y-auto overflow-x-hidden h-screen
      '
      >
        <li className='mb-32' />
        {rutas.map((ruta, i) => (
          <li
            key={i}
            className='hover:scale-125 transition-transform min-w-full '
          >
            <Link
              to={ruta.path}
              onClick={() => setOpen(false)}
              className=' block text-center py-3 px-5 rounded-lg bg-neutral-800 '
            >
              {ruta.name}
            </Link>
          </li>
        ))}
        <li>
          <button
            className='bg-neutral-500 py-2 px-4 rounded-lg'
            onClick={() => {
              setOpen(false)
              navigate('/usuarios')
            }}
          >
            Profile
          </button>
        </li>
        <li className='mt-10' />
      </div>
    </div>
  )
}

export default URLRutas
