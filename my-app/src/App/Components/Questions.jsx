import React, { useState } from 'react';

// This function will handle the answers and the Questions
export function Questions(QuestionShow, QuestionId) {


  // Define the questions and their sections
  const questions = {
    scope: [
        {title: "App scope"},
        {id: 1, Question: "What is the name of the App?", answer: 'fbsddsf'},
        {id: 2, Question: "what are the goals of the App?", answer: 'zdggn'},
        {id: 3, Question: "what problems will the app solve?", answer: 'dgzv'},
        {id: 4, Question: "What will the app cover and what wont it cover?", answer: ' '},
        
      // Add more scope questions here
    ],
    architecture: [
        {title: "System design & architecture"},
        {id: 1, Question: "introduction to the architecture of the app", answer: ' sddv '},
        {id: 2, Question: "network connectivity requirements?", answer: 'g'},
        {id: 3, Question: "design Principles", answer: 'gg'},
        {id: 4, Question: "data model", answer: 'gg'},
        {id: 5, Question: "User interface Design", answer: 'g'},
        {id: 6, Question: "System Components", answer: 'gg'},
        {id: 7, Question: "External interfaces", answer: 'gg'},
        {id: 8, Question: "Algorithms and Logic", answer: 'g'},
        {id: 9, Question: "Data flow and processing", answer: 'gg'},
        {id: 10, Question: "Deployment and Configuration", answer: 'jgy'},
        {id: 11, Question: "Dependencies and third-party libraries", answer: 'yuf'},
        {id: 12, Question: "Appendices", answer: 'utftu'},
      // Add more architecture questions here
    ],
    description: [
        {title: "General description"},
        {id: 1, Question: "Use cases", answer: 'jgg'},
        {id: 2, Question: "Product limitations and constraints", answer: ''},
        
        // Add more architecture questions here
    ],
     features: [
        {title: "features & requirements"},
        {id: 1, Question: "Features", answer: 'fbadgf'},
        {id: 2, Question: "Functional requirements", answer: ''},
        {id: 3, Question: "External interface requirement", answer: ''},
        {id: 4, Question: "Non-functional requirements", answer: ''},
      // Add more architecture questions here
    ],
  };


  
  // Initialize state objects for answers
  const scopeInitialAnswers = {};
  const archInitialAnswers = {};
  const descrInitialAnswers = {};
  const featuresInitialAnswers = {};

  // Define your state objects for answers
  const [scopeAnswers, setScopeAnswers] = useState(scopeInitialAnswers);
  const [archAnswers, setArchAnswers] = useState(archInitialAnswers);
  const [descrAnswers, setDescrAnswers] = useState(descrInitialAnswers);
  const [featuresAnswers, setFeaturesAnswers] = useState(featuresInitialAnswers);

    // Get the questions based on the selected show
    const selectedQuestions = questions[QuestionShow];
    //const Question_ID = findQuestionById(QuestionId);


  function getAnswers(Question) {
    if (Question === 'scope') {
      console.log(scopeAnswers)
    }
    if (Question === 'architecture') {
      return archAnswers;
    }
    if (Question === 'description') {
      return descrAnswers;
    }
    if (Question === 'features') {
      return featuresAnswers;
    }

    return {};
  }
  

  const handleAnswerChange = (id, value) => {
    setScopeAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));

    setArchAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));

    setDescrAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));

    setFeaturesAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };


  /*function findQuestionById(id) {
    for (const Question of selectedQuestions) {
      if (Question.id === id) {
        return Question;
      }
    }
    return 'All question answered';
  }*/


  if (selectedQuestions) {
    return (
      <>
          <div className='header_section'>
            <div className='header'>
              <div className="section_title">
                {questions[QuestionShow][0].title}
                <button className='markAsDone' >Mark as done</button>
                <label htmlFor="markAsDone" title="use this button to mark the section as done" className="markAsDone-label"></label>
              </div>
              <div className="toolbar">
                <input type="file" className="imageInput" id="imageInput" accept="image/*" />
                <label htmlFor="imageInput" className="imageInput-label"></label>
                <button className='Download'>Download file</button>
              </div>
            </div>
          </div>

          <div>
          {selectedQuestions.map((Question) => (
            <div key={Question.id}>
            
              <div className='section_Question'>
               
                  <div className='Question_Answer'>
                    <h2>{Question.Question}</h2> 
                    <button className='skip'>skip</button>
                    <textarea
                      value={getAnswers(QuestionShow)[Question.id]}
                      className="answer"
                      onChange={(e) => handleAnswerChange(Question.id, e.target.value)}
                      rows={Math.max(1, Math.ceil((getAnswers(QuestionShow)?.[Question.id] || '').length / 50))}
                      style={{ height: "auto" }}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        e.target.style.lineHeight = "1.5"; // Adjust this value as needed
                      }}
                    
                    />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return null;
  }
}
