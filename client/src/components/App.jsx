import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useSearchParams
} from "react-router-dom";
import Overview from './Overview/Overview.jsx';
import Questions from './Questions/Questions.jsx';
import Ratings from './Ratings/Ratings.jsx';
import Related from './Related/Related.jsx';
import '../style.css';
let helperFunctions = require('./helperFunctions.js').helperFunctions;

const App = () => {
  let id = helperFunctions.getIDFromURL(window.location.href);
  const [yourOutfit, setYourOutfit] = useState([]);
  const addToOutfit = (product) => {
    setYourOutfit(yourOutfit => ([...yourOutfit, product]));
  }

  const fullStar = (id, st, key) => {
    if (st === 'f') {
      return (
        <svg key={`${key}-${id}`} width="11px" height="11px" viewBox="0 0 31 31">
          <defs>
            <linearGradient id="grad-full">
              <stop offset="100%" stopColor="black"/>
            </linearGradient>
          </defs>
          <path fill="url(#grad-full)" stroke="black" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
      )
    } else if (st === 'e') {
      return (
        <svg key={`${key}-${id}`} width="11px" height="11px" viewBox="0 0 31 31">
          <defs>
            <linearGradient id="grad-full">
              <stop offset="100%" stopColor="white"/>
            </linearGradient>
          </defs>
          <path fill="white" stroke="black" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
        l11.547-1.2L16.026,0.6L20.388,10.918z"/>
        </svg>
      )
    }

  }

  const halfStar = (id, key, amount) => {
    return (
      <svg key={`${key}-${id}`} width="11px" height="11px" viewBox="0 0 31 31">
        <defs>
          <linearGradient id="grad-half">
          <stop offset={`${amount}%`} stopColor="black" stopOpacity='1'/>
          <stop offset={`${amount}%`} stopColor="white" stopOpacity='1'/>
          </linearGradient>
        </defs>
        <path fill="url(#grad-half)" stroke="black" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
      l11.547-1.2L16.026,0.6L20.388,10.918z"/>
      </svg>
    )
  }

  const generateStars = (rating, key) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i === fullStars) {
        if (rating % 1 > 0.0001) {
          stars.push(halfStar(i, key, (rating % 1) * 100));
        } else {
          stars.push(fullStar(i, 'e', key));
        }
        continue;
      }

      if (i < fullStars) {
        stars.push(fullStar(i, 'f', key));
      } else if ( i > fullStars - 1) {
        stars.push(fullStar(i, 'e', key))
      }
    }

    return stars;
  }

  return (
    <Router>
      <h1>App.jsx</h1>
      <Overview objID={id} yourOutfit={yourOutfit} addToOutfit={addToOutfit}/>
      <Questions objID={id}/>
      <Ratings objID={id}/>
      <Related objID={id} yourOutfit={yourOutfit} addToOutfit={addToOutfit} generateStars={generateStars}/>
    </Router>
  )
}

export default App;