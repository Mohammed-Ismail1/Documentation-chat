import React, {useState,} from 'react';
import './index.css';
import { Questions } from './Components/Questions';

function DocumentationChat() {
  const [QuestionShow, setQuestionShow] = useState('scope');
const [QuestionId, /*setQuestionId*/] = useState(1);

    return (
      <>
        <div className="ContentBar">
          <div className="Title">Chat content</div>
          <div className="Content">
            <ul>
              <button
                className={`NavBTN ${QuestionShow === 'scope' ? 'active' : ''}`}
                onClick={() => setQuestionShow('scope' )}>
                App scope
              </button>
            </ul>
            <ul>
              <button
                className={`NavBTN ${QuestionShow === 'architecture' ? 'active' : ''}`}
                onClick={() => setQuestionShow('architecture' )}>
                System design & architecture
              </button>
            </ul>
            <ul>
              <button 
                className={`NavBTN ${QuestionShow === 'description' ? 'active' : ''}`}
                onClick={() => setQuestionShow('description' )}>
              General description
            </button>
            </ul>
            <ul>
              <button 
                className={`NavBTN ${QuestionShow === 'features' ? 'active' : ''}`}
                onClick={() => setQuestionShow('features' )}>
              features & requirements
            </button>
            </ul>
          </div>
        </div>

        <div className="QuestionDisplay">
          {Questions(QuestionShow, QuestionId)}
        </div>

      </>
    );
  }

export default DocumentationChat;


