import React from "react";
import Video from "../video.png";
import {connect} from 'react-redux';

const Player = ({ category, movie }) => (
  <div className="player">
    <img src={Video} alt={`${movie.title} video`} />
    <span>#{category.name}</span>
    <h1>{movie.title}</h1>
    <p>It was released in {movie.released}</p>
  </div>
);

const mapStateToProps = (state) => ({
  category: state.selectedCategory,
  movie: state.selectedMovie,
})

export default connect(mapStateToProps)(Player);
