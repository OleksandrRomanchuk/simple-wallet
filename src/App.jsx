import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PublicRoutes from 'components/PublicRoute/PublicRoute';
import PrivateRoutes from 'components/PrivateRoute/PrivateRoute';
import AuthenticationPage from 'pages/AuthenticationPage/AuthenticationPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import StatisticPage from 'pages/StatisticPage/StatisticPage';

const App = () => {
  const user = 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/authentication');
  }, [navigate, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/statistic" element={<StatisticPage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
