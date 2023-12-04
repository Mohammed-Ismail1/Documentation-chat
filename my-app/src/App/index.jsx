// Import the necessary dependencies
import React, { useState } from 'react';
import './index.css';
import { Questions } from './Components/Questions';
import { importFromJson } from './Components/ExportJson';
export const Getquestions = await importFromJson()

// Note: Removed the export statement for `questions`

function DocumentationChat() {
  const [QuestionShow, setQuestionShow] = useState('scope');
  const question = Getquestions; 
  
  const [done, setDone] = useState({
    scope: false,
    architecture: false,
    description: false,
    features: false,
  });

  const [skipped, setSkipped] = useState({
    scope: false,
    architecture: false,
    description: false,
    features: false,
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


