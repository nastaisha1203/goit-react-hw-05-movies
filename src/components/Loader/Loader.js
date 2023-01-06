import { Watch } from 'react-loader-spinner';
import { Container } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="brown"
        ariaLabel="watch-loading"
        visible={true}
      />
    </Container>
  );
};
