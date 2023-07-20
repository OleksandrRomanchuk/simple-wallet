import { Outlet, Navigate } from 'react-router-dom';

const PublicRoutes = () => {
  const user = 0;
  return (
    <>
      {!user && <Outlet />}
      {user && <Navigate to={'/'} />}
    </>
  );
};

export default PublicRoutes;
