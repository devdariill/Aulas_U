import { Form, Formik } from 'formik'
import { useUsuarios } from '../context/UsuariosContext'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/auth.js'
import { useIndex } from '../../context/IndexContext'
function LoginUsuariosForm () {
  const setToken = useAuthStore((state) => state.setToken)
  const setProfile = useAuthStore((state) => state.setProfile)
  const navigate = useNavigate()
  const { loginUsuario, setSession, profileUsuario } = useUsuarios()
  const { setUser } = useIndex()
  return (
    <div>
      <div className='flex items-center justify-center h-screen flex-col gap-y-5'>
        <Formik
          initialValues={{ nomusu: '', clausu: '' }}
          enableReinitialize
          onSubmit={async (values, actions) => {
            try {
              const res = await loginUsuario(values)
              if (!res.data.token) throw new Error('No se pudo iniciar sesión')
              setUser(res.data.token)
              setSession(res.data.token)
              setToken(res.data.token)
              const resProfile = await profileUsuario()
              console.log('resProfile', resProfile)
              setProfile(resProfile.data)
              navigate('/')
            } catch (error) {
              console.log(
                '🚀 ~ file: Login.usuarios.jsx:20 ~ onSubmit={ ~ error',
                error
              )
            }
            actions.resetForm()
          }}
        >
          {/* 1 handleChange  : cambia el estado de initialValues */}
          {/* 2 handleSunbmit : envia los datos actualues al  */}
          {/* 3 values : genera los valores iniciales despues de enviar */}
          {({ handleChange, handleSubmit, values, isSubmiting }) => (
            <Form onSubmit={handleSubmit}>
              <div className='grid gap-y-2 items-center '>
                <label className='text-center rounded-md font-bold py-1'>
                  nomusu
                </label>
                <input
                  onChange={handleChange}
                  type='text'
                  name='nomusu'
                  placeholder='nomusu'
                  className='text-center'
                  value={values.nomusu}
                  autoFocus
                />
                <label className='text-center rounded-md font-bold py-1'>
                  clausu
                </label>
                <input
                  onChange={handleChange}
                  type='password'
                  name='clausu'
                  placeholder='clausu'
                  className='text-center'
                  value={values.clausu}
                />
                <button
                  type='submit'
                  className='bg-zinc-400 text-black outline-none border-none rounded-lg py-1 mt-3 font-semibold'
                  disabled={isSubmiting}
                >
                  {isSubmiting ? 'Saving' : 'Login'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default LoginUsuariosForm
