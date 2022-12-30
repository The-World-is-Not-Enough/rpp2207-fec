import React from 'react';
import AnsList from '../A-Components/AnsList.jsx';
import HelpReport from '../HelpReport.jsx';

const Question = (props) => {
  return (
    <div className="question-container">
      <h1><strong>Q: </strong>{props.body}</h1>
      <button
        id="add-ans"
        className="btn"
        onClick={props.openForm}
      > Add an Answer </button>
      <HelpReport
        val={props.q_ID}
        type={'questions'}
        helpful={props.helpful}
      />
      <div>
        <AnsList ans={props.answers}/>
      </div>
    </div>
  );
};

export default Question;