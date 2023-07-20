import { useLocation } from 'react-router-dom';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => {
  const location = useLocation();
  const inAuthenticationPage = location.pathname.includes('authentication');

  return <Wrapper authPage={inAuthenticationPage}>{children}</Wrapper>;
};

export default Container;
