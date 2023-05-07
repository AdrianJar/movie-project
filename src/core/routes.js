export const toMovies = () => "/movies";
export const toMovie = ({ movieId } = { movieId: "" }) => `/movies/${movieId}`;
export const toPeople = () => "/people";
export const toPerson = ({ personId } = { personId: "" }) => `/people/${personId}`;