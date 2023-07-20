import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = 1;
  return (
    <>
      {user && <Outlet />}
      {!user && <Navigate to={'/login'} />}
    </>
  );
};

export default PrivateRoutes;
