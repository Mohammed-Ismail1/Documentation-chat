import React, {useState,} from 'react';
import './index.css';
import { Questions } from './Components/Questions';

function DocumentationChat() {
  const [QuestionShow, setQuestionShow] = useState('scope');
  const [QuestionId, /*setQuestionId*/] = useState(1);
  const [done, setDone] = useState({
    scope: false,
    architecture: false,
    description: false,
    features: false,
  });

  const [skipped, setSkipped] =  useState({
    scope: false,
    architecture: false,
    description: false,
    features: false,
  });


    return (
      <>
        <div className="ContentBar">
          <div className="Title">Sections</div>
          <div className="Content">
            <ul>
              <button
                className={`NavBTN ${QuestionShow === 'scope' ? 'active' : ''} ${done.scope === true? 'sectionDone' : ''} `}
                onClick={() => setQuestionShow('scope' )}>
                {`${done.scope === true? 'App Scope ✔' : 'App Scope'}`}
              </button>
            </ul>
            <ul>
              <button
                className={`NavBTN ${QuestionShow === 'architecture' ? 'active' : ''} ${done.architecture === true? 'sectionDone' : ''} `}
                onClick={() => setQuestionShow('architecture' )}>
                {`${done.architecture === true? 'System design & architecture ✔' : 'System design & architecture'}`}
              </button>
            </ul>
            <ul>
              <button 
                className={`NavBTN ${QuestionShow === 'description' ? 'active' : ''} ${done.description === true? 'sectionDone' : ''} `}
                onClick={() => setQuestionShow('description' )}>
              {`${done.descriptio === true? 'General description ✔' : 'General description'}`}
            </button>
            </ul>
            <ul>
              <button 
                className={`NavBTN ${QuestionShow === 'features' ? 'active' : ''} ${done.features === true? 'sectionDone' : ''} `}
                onClick={() => setQuestionShow('features' )}>
              {`${done.features === true? 'features & requirementse ✔' : 'features & requirements'}`}
            </button>
            </ul>
          </div>
        </div>

        <div className="QuestionDisplay">
          {Questions(QuestionShow, QuestionId, done, setDone, skipped, setSkipped)}
        </div>

      </>
    );
}

export default DocumentationChat;


