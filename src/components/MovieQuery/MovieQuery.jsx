const MovieQuery = ({ movie, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type here..."
        // value={movie}
        onChange={onChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default MovieQuery;
