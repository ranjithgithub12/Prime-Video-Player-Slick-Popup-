import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'
const MovieItem = props => {
  const {eachMovie} = props
  const {id, thumbnailUrl, videoUrl} = eachMovie
  console.log(thumbnailUrl)

  return (
    <div className="popup-contianer">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popopup-content"
      >
        {close => (
          <div className="movie-contianer">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}

            >
              {' '}
              <IoMdClose size="30" />
            </button>
            <ReactPlayer url={videoUrl} width="540px" height="360px" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
