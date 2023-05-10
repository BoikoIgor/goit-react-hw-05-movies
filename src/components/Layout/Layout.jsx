import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
// import { Suspense } from 'react';

const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      {/* <Suspense fallback={<p>Loading ...</p>}> */}
      <Outlet />
      {/* </Suspense> */}
    </Container>
  );
};
export default Layout;
