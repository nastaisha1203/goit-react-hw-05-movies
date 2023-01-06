import { Box, List } from './Card.styled';

const Card = ({
  movie: { title, overview, poster_path, vote_average, genres, release_date },
}) => {
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.round(vote_average * 10);
  const url =
    poster_path === null
      ? 'https://via.placeholder.com/200x300'
      : `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Box>
      <img src={url} alt={title} width={250} />
      <div>
        <h2>{`${title}(${releaseDate})`}</h2>
        <p>User score: {voteAverage}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <List>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </List>
      </div>
    </Box>
  );
};
export default Card;
