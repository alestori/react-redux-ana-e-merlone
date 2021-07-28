export const CHANGE_MOVIE = 'CHANGE_MOVIE';

export const changeMovie = (category, movie) => ({
  type: CHANGE_MOVIE,
  category, 
  movie
});