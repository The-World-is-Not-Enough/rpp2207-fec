import React, { useState, useEffect } from 'react';
import questionAPI from '../../API/Questions.js';
import Search from './Search.jsx';
import QuestList from './Q-Components/QuestList.jsx';
import exampleQuestion from './exData.js';

const Questions = (props) => {
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    questionAPI.getAllQuestions(props.objID)
      .then(results => {
        setQuestions(results);
      })
      .catch(err => console.log(err));
  }, [props.objID]);

  return (
    <div id="qna-container">
      <h1 id="qna-title">Q & A</h1>
      <Search />
      <QuestList questions={questions} length={questions.length}/>
    </div>
  )
}

export default Questions;