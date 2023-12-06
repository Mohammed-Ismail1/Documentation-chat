// Import the necessary dependencies
import React, { useState } from 'react';
import './index.css';
import { Questions } from './Components/Questions';
import { importFromJson } from './Components/ExportJson';
export const Getquestions = await importFromJson()

// Note: Removed the export statement for `questions`

function DocumentationChat() {
  const [QuestionShow, setQuestionShow] = useState(1);
  const question = Getquestions; 
  
  const [done, setDone] = useState({
    1: false,
    2: false,
  });

  const [skipped, setSkipped] = useState({
    1: false,
    2: false,
  });

  const renderButtons = () => {
    if (!question) {
      return null;
    }

    return Object.keys(question).map((section) => (
      <ul key={section}>
        <button
          className={`NavBTN ${QuestionShow === section ? 'active' : ''} ${done[section] === true ? 'sectionDone' : ''}`}
          onClick={() => setQuestionShow(section)}>
          {`${done[section] === true  || question[section][1].done? (` ${question && question[section][0].title} ✔`) : ( question && question[section][0].title) }`}
        </button>
      </ul>
    ));
  };

  return (
    <>
      <div className="ContentBar">
        <div className="Title">Sections</div>
        <div className="Content">{renderButtons()}</div>
      </div>

      <div className="QuestionDisplay">
        {Questions(QuestionShow, done, setDone, skipped, setSkipped)}
      </div>
    </>
  );

}



export default DocumentationChat;


