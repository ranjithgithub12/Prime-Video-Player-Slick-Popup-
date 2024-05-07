import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="banner-width"
      />
      <div className="movie-container">
        <h1 className="heading">Action Movies</h1>
        <div className="slick-container">
          <MoviesSlider category="ACTION" moviesList={moviesList} />
        </div>
        <h1 className="heading">Comedy Movies</h1>
        <div className="slick-container">
          <MoviesSlider category="COMEDY" moviesList={moviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
