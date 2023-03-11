import { Outlet } from 'react-router-dom'
export const ProtectRoute = ({ children, isAllow }) => {
  // const { user } = useIndex();
  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  // if (!isAllow) return <Navigate to='/' />
  // return children ? <>children</> : <Outlet />; //FUTURE FIX.
  return children || <Outlet />
}
