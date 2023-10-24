import React, { useState, useEffect, useMemo, useRef } from 'react';

// This function will handle the answers and the Questions
export function Questions(QuestionShow, QuestionId) {


  // Define the questions and their sections
  const questions = useMemo(() => {
    return {    
        scope: [
          {title: "App scope"},
          {done: false},
          {id: 1, Question: "What is the name of the App?", answer: '', skip: false},
          {id: 2, Question: "what are the goals of the App?", answer: '', skip: false},
          {id: 3, Question: "what problems will the app solve?", answer: '', skip: false},
          {id: 4, Question: "What will the app cover and what wont it cover?", answer: '', skip: false},
          
      ],
      architecture: [
          {title: "System design & architecture"},
          {done: false},
          {id: 5, Question: "introduction to the architecture of the app", answer: '', skip: false},
          {id: 6, Question: "network connectivity requirements?", answer: '', skip: false},
          {id: 7, Question: "design Principles", answer: '', skip: false},
          {id: 8, Question: "data model", answer: '', skip: false},
          {id: 9, Question: "User interface Design", answer: '', skip: false},
          {id: 10, Question: "System Components", answer: '', skip: false},
          {id: 11, Question: "External interfaces", answer: '', skip: false},
          {id: 12, Question: "Algorithms and Logic", answer: '', skip: false},
          {id: 13, Question: "Data flow and processing", answer: '', skip: false},
          {id: 14, Question: "Deployment and Configuration", answer: '', skip: false},
          {id: 15, Question: "Dependencies and third-party libraries", answer: '', skip: false},
          {id: 16, Question: "Appendices", answer: '', skip: false},
      ],
      description: [
          {title: "General description"},
          {done: false},
          {id: 17, Question: "Use cases", answer: '', skip: false},
          {id: 18, Question: "Product limitations and constraints", answer: '', skip: false},
          
      ],
      features: [
          {title: "features & requirements"},
          {done: false},
          {id: 19, Question: "Features", answer: '', skip: false},
          {id: 20, Question: "Functional requirements", answer: '', skip: false},
          {id: 21, Question: "External interface requirement", answer: '', skip: false},
          {id: 22, Question: "Non-functional requirements", answer: '', skip: false},
      ],
    };
  }, []); // Provide an empty dependency array to ensure it's only created once

    
  const [answers, setAnswers] = useState({
    scope: {},
    architecture: {},
    description: {},
    features: {},
  });

  const selectedQuestions = questions[QuestionShow].filter((question) => question.id);
  const isMounted = useRef(false);


  useEffect(() => {
    // Set initial state based on QuestionShow only when the component mounts
    if (isMounted.current) return;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      // Iterate through all sections and collect answers
      ...Object.keys(questions).reduce((acc, section) => {
        acc[section] = questions[section].reduce((sectionAnswers, question) => {
          sectionAnswers[question.id] = question.answer;
          return sectionAnswers;
        }, {});
        return acc;
      }, {}),
    }));
    

    isMounted.current = true;
  }, [questions]);

  const handleAnswerChange = (section, id, value) => {

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [id]: value,
      },
    }));
  };

  const checkAnswers = (answers, section, questionId) =>{

    const answer = answers[section][questionId];
    // Check if answer is a string and if it's empty or null
    if (typeof answer !== 'string' || answer.trim() === '') {
      return false;
    }else{
      return true
    }

  }

  const markAsDone = (answers, section, questionId) =>{
    const check = checkAnswers(answers, section, questionId)

    if(check){
      console.log('All questions are answered')
    }else{
      console.log('Not all questions are answered')

    }

  }

  if (selectedQuestions) {
    return (
      <>
          <div className='header_section'>
            <div className='header'>
              <div className="section_title">
                {questions[QuestionShow][0].title}
                {selectedQuestions.map((Question) => (
                  <button className='markAsDone' onClick={() => markAsDone(answers, QuestionShow, Question.id)}>
                    Mark as done
                  </button>
                ))}
                <label htmlFor="markAsDone" title="use this button to mark the section as done" className="markAsDone-label"></label>
              </div>
              <div className="toolbar">
                <input type="file" className="imageInput" id="imageInput" accept="image/*" />
                <label htmlFor="imageInput" className="imageInput-label"></label>
                <button className='Download'>Download file</button>
              </div>
            </div>
          </div>

          <div className='page'>
          {selectedQuestions.map((Question) => (
            <div key={Question.id}>
              <div className='section_Question'>
                <div className='Question_Answer'>
                  <div className='Question'>{Question.Question}
                  <button className='skip'>skip</button>
                  </div>
                  <textarea
                    value={answers[QuestionShow][Question.id] || ''}
                    className="answer"
                    onChange={(e) =>
                      handleAnswerChange(QuestionShow, Question.id, e.target.value)
                    }
                    rows={Math.max(1, Math.ceil((answers[QuestionShow][Question.id] || '').length / 50))}
                    style={{ height: "auto" }}
                    onInput={(e) => {
                    const textarea = e.target;
                    textarea.style.height = 'auto';
                    textarea.style.height = `${textarea.scrollHeight}px`;
                    textarea.style.lineHeight = "1.5"; // Adjust this value as needed
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
