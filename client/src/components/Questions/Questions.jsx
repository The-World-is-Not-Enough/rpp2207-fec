import React, { useState } from 'react';
import Search from './Search.jsx';
import QuestList from './Q-Components/QuestList.jsx';
import AnsForm from './A-Components/AnsForm.jsx';
import QuestForm from './Q-Components/QuestForm.jsx';
import './qna.css';

const Questions = (props) => {
  console.log(props.data);
  const data = props.data;
  let [questions, setQuestions] = useState(data.questions);
  let [form, setForm] = useState(0);

  var handleSearch = (term) => {
    var results = data.questions.filter(q => {
      return q.question_body.toLowerCase().includes(term.toLowerCase());
    });
    setQuestions(results);
  };

  var openForm = (id) => {
    console.log(id);
    setForm(id);
  };
  var closeForm = () => { setForm(0); };

  return (
    <div id="qna" className="qna-container">
      {form > 0 ?
        <AnsForm closeForm={closeForm}/> : null
      }
      {form < 0 ?
        <QuestForm
          closeForm={closeForm}
          itemName={data.product.name}
          productId={data.id}
        /> : null
      }
      <h1 className="qna-title">Q & A</h1>
      <Search handleSearch={handleSearch}/>
      <QuestList
        questions={questions}
        openForm={openForm}
      />
    </div>
  );
};

export default Questions;