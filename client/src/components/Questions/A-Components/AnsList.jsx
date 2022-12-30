import React, { useState, useEffect } from 'react';
import questionAPI from '../../../API/Questions.js';
import Answer from './Answer.jsx';

const AnsList = (props) => {
  let [answers, setAnswers] = useState([]);
  let [rendered, setRendered] = useState([]);
  let [num, setNum] = useState(2);

  useEffect(() => {
    var ans = Object.values(props.ans);
    var curr = 0;
    var next = 1;
    while (curr < ans.length - 1) {
      if (ans[curr].helpfulness < ans[next].helpfulness) {
        let temp = ans[curr];
        ans[curr] = ans[next];
        ans[next] = temp;
      }
      next++;

      if (next === ans.length) {
        curr++;
        next = curr + 1;
      }
    }
    console.log(ans[0].photos[0]);
    setRendered(ans.length < 2 ? ans : [ans[0], ans[1]]);
    setNum(ans.length < 2 ? 1 : 2);
    setAnswers(ans);
  }, [props.ans]);

  var handleMore = () => {
    var tempArr = rendered;
    var tempNum = num;
    if (answers.length - rendered.length >= 2) {
      tempArr.push(answers[num]);
      tempArr.push(answers[num + 1]);
      tempNum += 2;
    } else {
      tempArr.push(answers[num]);
      tempNum += 1;
    }
    setRendered(tempArr);
    setNum(tempNum);
  };

  var handleCollapse = () => {
    setRendered([ answers[0], answers[1] ]);
  };

  return (
    <div id="a-content" className="qna-container">
      <div id="a-list" className="list-container">
        {rendered.map((a, idx) => {
          return (
            <Answer
              key={idx}
              a_ID={a.id}
              body={a.body}
              date={a.date}
              helpful={a.helpfulness}
              name={a.answerer_name}
              photos={a.photos}
            />
          );
        })}
      </div>
      {rendered.length < answers.length ?
        <button id="more-a" className="btn" onClick={handleMore}> More Answers </button>
        : null}
      {rendered.length > 2 ?
        <button id="collapse-a" className="btn" onClick={handleCollapse}> Collapse Answers </button>
        : null}
    </div>
  );
};

export default AnsList;