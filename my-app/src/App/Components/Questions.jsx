import React, { useState } from 'react';

// This function will handle the answers and the Questions
export function Questions(QuestionShow, QuestionId) {


  // Define the questions and their sections
  const questions = {
    scope: [
        {title: "App scope"},
        {id: 1, Question: "What is the name of the App?", answer: 'fbsddsf'},
        {id: 2, Question: "what are the goals of the App?", answer: 'adgfbadg'},
        {id: 3, Question: "what problems will the app solve?", answer: ''},
        {id: 4, Question: "What will the app cover and what wont it cover?", answer: ''},
        
      // Add more scope questions here
    ],
    architecture: [
        {title: "System design & architecture"},
        {id: 1, Question: "introduction to the architecture of the app", answer: ' sd dv '},
        {id: 2, Question: "network connectivity requirements?", answer: ''},
        {id: 3, Question: "design Principles", answer: ''},
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
        {id: 1, Question: "Use cases", answer: 'hffsavfa'},
        {id: 2, Question: "Product limitations and constraints", answer: 'msdgbsdgb'},
        
        // Add more architecture questions here
    ],
     features: [
        {title: "features & requirements"},
        {id: 1, Question: "Features", answer: 'fbadgf'},
        {id: 2, Question: "Functional requirements", answer: 'mfgh'},
        {id: 3, Question: "External interface requirement", answer: ''},
        {id: 4, Question: "Non-functional requirements", answer: ''},
      // Add more architecture questions here
    ],
  };

  // Get the questions based on the selected show
  const selectedQuestions = questions[QuestionShow];
  
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

  var answer = scopeAnswers;

  // Iterate through the questions and populate the initial answers
  for (const section in questions) {
    for (const question of questions[section]) {
      if (question.id && question.answer !== undefined) {
        // Check if the question has an answer and a valid ID
        if (section === 'scope') {
          scopeInitialAnswers[question.id] = question.answer;
          answer = scopeAnswers;

        } else if (section === 'architecture') {
          archInitialAnswers[question.id] = question.answer;
          answer = archAnswers;

        } else if (section === 'description') {
          descrInitialAnswers[question.id] = question.answer;
          answer = descrAnswers;

        } else if (section === 'features') {
          featuresInitialAnswers[question.id] = question.answer;
          answer = featuresAnswers;

        }
      }
    }
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


  function findQuestionById(id) {
    for (const Question of selectedQuestions) {
      if (Question.id === id) {
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
            <div key={Question.id}>
              <div className='header'>
                <h1 className="section_title">{Question.title}</h1>
                <div className='toolbar'>
                  {/*<input type="file" className="imageInput" id="imageInput" accept="image/*" />
                  <label htmlFor="imageInput" className="imageInput-label"></label>*/}
                </div>
              </div>
              
              <div className='section_Question'>
                {Question.answer && (
                  <div className='Question_Answer'>
                    <h2>{Question.Question}</h2>
                    <textarea
                      value={answer[Question.id]}
                      className="answer"
                      onChange={(e) => handleAnswerChange(Question.id, e.target.value)}
                      rows={Math.max(1, Math.ceil(descrAnswers[Question.id].length / 50))}
                      style={{ height: "auto" }}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                        e.target.style.lineHeight = "1.5"; // Adjust this value as needed
                      }}
                    
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='Question'>
          <h2>{Question_ID.Question}</h2>
        </div>
      </>
    );
  } else {
    return null;
  }
}
