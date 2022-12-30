import React from 'react';
import AnsList from '../A-Components/AnsList.jsx';
import HelpReport from '../HelpReport.jsx';

const Question = ({ body, questionId, helpful, answers, openForm }) => {
  return (
    <div className="question-container">
      <h1><strong>Q: </strong>{body}</h1>
      <button
        id="add-ans"
        className="btn"
        onClick={() => openForm(questionId)}
      > Add an Answer </button>
      <HelpReport
        val={questionId}
        type={'questions'}
        helpful={helpful}
      />
      <div>
        <AnsList ans={answers}/>
      </div>
    </div>
  );
};

export default Question;