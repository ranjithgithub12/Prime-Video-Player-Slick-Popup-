import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {category, moviesList} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(eachList => {
        if (eachList.categoryId === category) {
          return <MovieItem eachMovie={eachList} key={eachList.id} />
        }
        return null
      })}
    </Slider>
  )
}

export default MovieSlider
