import React from "react";
import {connect} from 'react-redux';
import {changeMovie} from '../redux/actions';

const Sidebar = ({ categories, idMovieSelected, funcao }) => {
  return (
    <aside className="categories">
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h3 className="category-title">{category.name}</h3>
          <ul className="category-movies">
            {category.movies.map((movie) => (
              <li
                key={movie.id}
                onClick={() => funcao(category, movie)}
                className={idMovieSelected === movie.id && "active"}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};


const mapStateToProps = (state) => ({
  categories: state.categories,
  idMovieSelected: state.selectedMovie.id
})

const mapDispatchToProps = (dispatch) => ({
  funcao: (category, movie) => dispatch(changeMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
