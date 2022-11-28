import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import Zoom from './Zoom.jsx';

const ExpandedView = (props) => {

  const [indexOfCurrentImg, setIndexOfCurrentImg] = useState(props.indexOfExpandedImg);
  const [zoomView, setZoomView] = useState(false);

  const handleLeftClick = () => {
    setIndexOfCurrentImg(indexOfCurrentImg - 1);
  }

  const handleRightClick = () => {
    setIndexOfCurrentImg(indexOfCurrentImg + 1);
  }

  if (!zoomView) {
    return (
      <div id="expanded-view">
        {indexOfCurrentImg === 0
            ? null
            : <FontAwesomeIcon id="left-arrow" icon={faAngleLeft} onClick={() => handleLeftClick()} />
          }
          {indexOfCurrentImg === props.photos.length - 1
            ? null
            : <FontAwesomeIcon id="right-arrow" icon={faAngleRight} onClick={() => handleRightClick()} />
            }
        <div id="circle-expanded-view">
          {props.photos.map((photo, index) => {
            const highlight = {
              transform: indexOfCurrentImg === index ? 'scale(2)' : null
            };
            return <FontAwesomeIcon id="circle" style={highlight} icon={faCircle} key={uuidv4()} onClick={() => setIndexOfCurrentImg(index)} />
          })}
        </div>
          <img
          src={props.chosenStyle.photos[indexOfCurrentImg].thumbnail_url}
          id="expanded-img"
          onClick={() => setZoomView(true)}
          />
      </div>
    );
  } else {
    return (
      <div>
        <Zoom
          img={props.chosenStyle.photos[indexOfCurrentImg].thumbnail_url}
          setZoomView={setZoomView} />
      </div>
    )
  }
};

export default ExpandedView;