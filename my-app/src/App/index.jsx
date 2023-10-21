import React, {useState,} from 'react';
import './index.css';
import { Questions } from './Components/Questions';

function DocumentationChat() {
  const [QuestionShow, setQuestionShow] = useState('scope');
  const [QuestionId, setQuestionId] = useState(1);

    return (
      <>
        <div className="ContentBar">
          <div className="Title">Chat content</div>
          <div className="Content">
            <ul>
              <button
                className="NavBTN"
                onClick={() => setQuestionShow('scope' )}>
                App scope
              </button>
            </ul>
            <ul>
              <button
                className="NavBTN"
                onClick={() => setQuestionShow('architecture' )}>
                System design & architecture
              </button>
            </ul>
            <ul>
              <button 
              className="NavBTN"
              onClick={() => setQuestionShow('description' )}>
              General description
            </button>
            </ul>
            <ul>
              <button 
              className="NavBTN"
              onClick={() => setQuestionShow('features' )}>
              features & requirements
            </button>
            </ul>
          </div>
        </div>

        <div className="QuestionDisplay">
          {Questions(QuestionShow, QuestionId)}
        </div>

        <form method="POST">
          <div className="InputContainer">

          </div>
        </form>
      </>
    );
  }

export default DocumentationChat;


