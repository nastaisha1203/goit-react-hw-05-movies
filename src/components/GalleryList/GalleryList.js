import { Box, Link, List, Text } from './GalleryList.styled';
const GalleryList = ({ gallery }) => {
  return (
    <Box>
      <List>
        {gallery.map(({ id, title, poster_path }) => (
          <Link to={`/movies/${id}`} key={id}>
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
        ))}
      </List>
    </Box>
  );
};
export default GalleryList;
