import React, { Component,} from 'react';
import './index.css';

export default class DocumentationChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QuestionShow: 'scope',
      QuestionId: 4,
    };
  }

  render() {
    const { QuestionShow, QuestionId } = this.state;

    return (
      <>
        <div className="ContentBar">
          <div className="Title">Chat content</div>
          <div className="Content">
            <ul>
              <button
                className="NavBTN"
                onClick={() => this.setState({ QuestionShow: 'scope' })}>
                App scope
              </button>
            </ul>
            <ul>
              <button
                className="NavBTN"
                onClick={() => this.setState({ QuestionShow: 'architecture' })}>
                System design & architecture
              </button>
            </ul>
            <ul>
              <button 
              className="NavBTN"
              onClick={() => this.setState({ QuestionShow: 'description' })}>
                General description
            </button>
            </ul>
            <ul>
              <button 
              className="NavBTN"
              onClick={() => this.setState({ QuestionShow: 'features' })}>
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
            <input type="text" className="InputBox" placeholder="Document the application" />
            <input type="file" className="imageInput" id="imageInput" accept="image/*" />
            <label htmlFor="imageInput" className="imageInput-label"></label>
            <input type="submit" className="SubmitBtn" value="" />
          </div>
        </form>
      </>
    );
  }
}

// This function will handle the answers and the Questions
function Questions(QuestionShow, QuestionId) {
  // Define the questions and their sections
  const questions = {
    scope: [
        {title: "App scope"},
        {id: 1, Question: "What is the name of the App?", answer: 'Documentation chat'},
        {id: 2, Question: "what are the goals of the App?", answer: 'make documenting more efficient'},
        {id: 3, Question: "what problems will the app solve?", answer: 'it makes documenting easier'},
        {id: 4, Question: "What will the app cover and what wont it cover?", answer: 'fbfb'},
      // Add more scope questions here
    ],
    architecture: [
        {title: "System design & architecture"},
        {id: 1, Question: "introduction to the architecture of the app", answer: 'sff'},
        {id: 2, Question: "network connectivity requirements?", answer: 'fb'},
        {id: 3, Question: "design Principles", answer: 'FBf'},
        {id: 4, Question: "data model", answer: ''},
        {id: 5, Question: "User interface Design", answer: ''},
        {id: 6, Question: "System Components", answer: ''},
        {id: 7, Question: "External interfaces", answer: ''},
        {id: 8, Question: "Algorithms and Logic", answer: ''},
        {id: 9, Question: "Data flow and processing", answer: ''},
        {id: 10, Question: "Deployment and Configuration", answer: ''},
        {id: 11, Question: "Dependencies and third-party libraries", answer: ''},
        {id: 12, Question: "Appendices", answer: ''},
      // Add more architecture questions here
    ],
    description: [
        {title: "General description"},
        {id: 1, Question: "Use cases", answer: ''},
        {id: 2, Question: "Product limitations and constraints", answer: ''},
        
        // Add more architecture questions here
    ],
     features: [
        {title: "features & requirements"},
        {id: 1, Question: "Features", answer: ''},
        {id: 2, Question: "Functional requirements", answer: ''},
        {id: 3, Question: "External interface requirement", answer: ''},
        {id: 4, Question: "Non-functional requirements", answer: ''},
      // Add more architecture questions here
    ],
  };

  // Get the questions based on the selected show
  const selectedQuestions = questions[QuestionShow];

  function findQuestionById(id){
    for(const Question of selectedQuestions){
      if(Question.id === id){
        return Question;
      }
    }
    return 'All question answered';
  }

  const Question_ID = findQuestionById(QuestionId);

  if (selectedQuestions) {
    return (
      <>
        <div>
            {selectedQuestions.map((Question) => (
              <div>
                <h1 className="section_title">{Question.title}</h1>
                {Question.answer && (
                  <div>
                  <h2>{Question.Question}</h2>
                  {Question.answer}</div>
                )}
              </div>
                
            ))}
        </div>
        {}
        <div>
          <h2>{Question_ID.Question}</h2>
        </div>
      </>
    );
  } else {
    return null; // Return null for other cases
  }
}
