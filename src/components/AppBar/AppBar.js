import { Header, Link, Navigation } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Navigation>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movies</Link>
      </Navigation>
    </Header>
  );
};

export default AppBar;
