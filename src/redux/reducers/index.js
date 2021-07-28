import {CHANGE_MOVIE} from '../actions';
import categories from '../data';

const INITIAL_STATE = {
  categories: [...categories],
  selectedCategory: categories[0],
  selectedMovie: categories[0].movies[0]
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_MOVIE:
      return {
        ...state,
        selectedCategory: action.category,
        selectedMovie: action.movie,
      };
    default:
      return state;
  }
}
