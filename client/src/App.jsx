import { Route, Routes } from 'react-router-dom'
import Layout from './components/NavbarFilter'
import NotFound from './pages/NotFound'
import Usuario from './Usuario/pages/Page.usuarios'
import LoginUsuario from './Usuario/pages/Login.usuarios'
import AddUsuariosForm from './Usuario/pages/Add.usuarios'
import Aulas from './Aula/pages/Page.aulas'
import AulaAdd from './Aula/pages/Add.aulas'
// import AulaForm from './Aula/pages/Form.aulas'
// import Cookie from './Cookie/pages/Page.cookies'
import AddCookie from './Cookie/pages/Add.cookies'
import Home from './pages/Page.Home'
import { ProtectRoute } from './components/ProtectedRoute'
import { useAuthStore } from './store/auth.js'

function App() {
  const isAuth = useAuthStore((state) => state.isAuth)
  return (
    <>
      <Layout />
      <div className='text-white bg-zinc-900 h-full container mx-auto max-w-prose md:max-w-5xl mt-28'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/cookies' element={<AddCookie />} />
          {/* <Route path="/login" element={<Cookie />} /> */}
          {/* </Route> */}
          <Route path='/usuarios/login' element={<LoginUsuario />} />
          <Route element={<ProtectRoute isAllow={isAuth} />}>
            <Route path='/aulas'>
              <Route index element={<Aulas />} />
              <Route path='add' element={<AulaAdd />} />
              <Route path='edit/:codprod' element={<Aulas />} />
            </Route>
            <Route path='/usuarios'>
              <Route index element={<Usuario />} />
              <Route path='new' element={<AddUsuariosForm />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
export default App
