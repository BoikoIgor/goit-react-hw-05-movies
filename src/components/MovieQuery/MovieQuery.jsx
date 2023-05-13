import PropTypes from 'prop-types';

const MovieQuery = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Type here..." />
      <button type="submit">Search</button>
    </form>
  );
};

MovieQuery.propTypes = { onSubmit: PropTypes.func.isRequired };

export default MovieQuery;
