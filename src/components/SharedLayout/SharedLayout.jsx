import { Outlet, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from 'components/Header/Header';
import Section from 'components/common/Section/Section';
import Container from 'components/common/Container/Container';

const SharedLayout = () => {
  const user = 1;

  useEffect(() => {
    if (!user) <Navigate to={'/login'} />;
  }, []);

  return (
    <>
      {user && <Header />}

      <main style={{ height: '100vh' }}>
        <Section>
          <Container>
            <Outlet />
          </Container>
        </Section>
      </main>

      <footer></footer>
    </>
  );
};

export default SharedLayout;
