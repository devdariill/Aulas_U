import { Route, Routes } from 'react-router-dom'
import Layout from './components/NavbarFilter'
import NotFound from './pages/NotFound'
import Usuario from './Usuario/pages/Page.usuarios'
import LoginUsuario from './Usuario/pages/Login.usuarios'
import AddUsuariosForm from './Usuario/pages/Add.usuarios'
import Productos from './Aula/pages/Page.productos'
// import AddProductoForm from "./Aula/pages/Add.productos";
import ProductoForm from './Aula/pages/Form.productos'
import ProductoAdd from './Aula/pages/Add.productos'
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
            <Route path='/productos'>
              <Route index element={<Productos />} />
              {/* <Route path="add" element={<CreateProductoForm />} /> */}
              {/* TODO FIX NAVBAR */}
              <Route path='add' element={<ProductoAdd />} />
              <Route path='edit/:codprod' element={<ProductoForm />} />
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
// {
//   /*
//   const rutas = [
//     { name: "Productos", path: "/productos",lvl:1 },
//     { name: "Ventas", path: "/ventas", lvl:2},
//     { name: "Compras", path: "/compras", lvl:3 },
//     { name: "Terceros", path: "/terceros", lvl:4 },
//   ];
//   <LOGIN>
//     IF(USER.LEVEL=1)
//       ...Rutas.map() de lvl 1
//     ELSE IF(USER.LEVEL=2)
//       ...Rutas.map() de lvl 2
//     ...
//     ROUTES.MAP

//   <LOGIN>
//  */
// }
