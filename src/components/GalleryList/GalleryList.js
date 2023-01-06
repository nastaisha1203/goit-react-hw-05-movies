import { Link, useLocation } from 'react-router-dom';
import { Box, Item, List, Text } from './GalleryList.styled';
import PropTypes from 'prop-types';

const GalleryList = ({ gallery }) => {
  const location = useLocation();
  return (
    <Box>
      <List>
        {gallery.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path === null
                    ? 'https://via.placeholder.com/200x300'
                    : `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={title}
                width={200}
              />
              <Text>{title}</Text>
            </Link>
          </Item>
        ))}
      </List>
    </Box>
  );
};
export default GalleryList;

GalleryList.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
