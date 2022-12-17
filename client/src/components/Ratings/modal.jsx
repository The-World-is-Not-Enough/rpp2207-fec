import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

let Modal = (props) => {
  console.log('modal is loading in');
  return (
    <div className='reviews-modal' onBlur={props.onClick}>
      <div className='image-wrapper'>
        <span id='reviews-modal-overlay' onClick={props.onClick}><FontAwesomeIcon icon={faXmark} /></span>
        <img src={props.src}
          alt='Sorry, the image could not be loaded at this time, please try again later.'/>
      </div>
    </div>
  );
};

export default Modal;