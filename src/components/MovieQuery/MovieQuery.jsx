const MovieQuery = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Type here..." />
      <button type="submit">Search</button>
    </form>
  );
};
export default MovieQuery;
