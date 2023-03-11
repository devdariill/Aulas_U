import { Outlet } from 'react-router-dom'
import Navbar from './NavbarFilter'
function Layout () {
  // const { user } = useIndex();
  // if (!user) {
  //   return <Navigate to="/" />;
  // }
  return (
    <div>
      <Navbar />
      <div className='mx-auto py-4 px-5 lg:px-20'>
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
