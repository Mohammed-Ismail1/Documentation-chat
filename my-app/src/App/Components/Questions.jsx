import React, { useState, useEffect, useMemo, useRef } from 'react';
//import ExportJSON from './ExportJSON'; // Import the ExportJSON component


// This function will handle the answers and the Questions
export function Questions(QuestionShow, QuestionId, done, setDone, skipped, setSkipped) {


  // Define the questions and their sections, useMemo() ensures that the object is not re-computed on every render
  const questions = useMemo(() => {
    return {    
        scope: [
          {title: "App scope"},
          {done: false},
          {id: 1, Question: "What is the name of the App?", answer: '', hint: "WHat is the name of your application? name your app", skip: false},
          {id: 2, Question: "what are the goals of the App?", answer: '', hint: "what is the purpose of your app, what are you trying to achieve with it?", skip: false},
          {id: 3, Question: "what problems will the app solve?", answer: '', hint: "what are the problems the app will solve for the user", skip: false},
          {id: 4, Question: "What will the app cover and what wont it cover?", answer: '', hint: "name the things your app will do and what it wont do", skip: false},
          
      ],
      architecture: [
          {title: "System design & architecture"},
          {done: false},
          {id: 5, Question: "introduction to the architecture of the app", answer: '', hint: "what is the layout of the app's architecture, what will the architecture look like?", skip: false},
          {id: 6, Question: "network connectivity requirements?", answer: '', hint: "", skip: false},
          {id: 7, Question: "design Principles", answer: '', hint: "", skip: false},
          {id: 8, Question: "data model", answer: '', hint: "", skip: false},
          {id: 9, Question: "User interface Design", answer: '', hint: "", skip: false},
          {id: 10, Question: "System Components", answer: '', hint: "", skip: false},
          {id: 11, Question: "External interfaces", answer: '', hint: "", skip: false},
          {id: 12, Question: "Algorithms and Logic", answer: '', hint: "", skip: false},
          {id: 13, Question: "Data flow and processing", answer: '', hint: "", skip: false},
          {id: 14, Question: "Deployment and Configuration", answer: '', hint: "", skip: false},
          {id: 15, Question: "Dependencies and third-party libraries", answer: '', hint: "", skip: false},
          {id: 16, Question: "Appendices", answer: '', hint: "", skip: false},
      ],
      description: [
          {title: "General description"},
          {done: false},
          {id: 17, Question: "Use cases", answer: '', hint: "", skip: false},
          {id: 18, Question: "Product limitations and constraints", answer: '', hint: "", skip: false},
          
      ],
      features: [
          {title: "features & requirements"},
          {done: false},
          {id: 19, Question: "Features", answer: '', hint: "", skip: false},
          {id: 20, Question: "Functional requirements", answer: '', hint: "", skip: false},
          {id: 21, Question: "External interface requirement", answer: '', hint: "", skip: false},
          {id: 22, Question: "Non-functional requirements", answer: '', hint: "", skip: false},
      ],
    };
  }, []); // Provide an empty dependency array to ensure it's only created once

  /*
  const questions = useMemo(() => {
    const scope = () =>{

    }

    const architecture = () =>{
      
    }

    const description = () =>{
      
    }

    const features = () =>{
      
    }
  }, []); // Provide an empty dependency array to ensure it's only created once
  */


  const [answers, setAnswers] = useState({
    scope: {},
    architecture: {},
    description: {},
    features: {},
  });

  const [/*skip*/, setskip] = useState(false)

  const [finished, setFinished] = useState(false)

  const selectedQuestions = questions[QuestionShow].filter((question) => question.id);
  const isMounted = useRef(false);// useRef() is used to prevent a re-render when a mutable value is stored or changed


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

    const updatedQuestions = { ...questions };

    const sectionQuestions = updatedQuestions[section];
    const questionIndex = sectionQuestions.findIndex(question => question.id === id);
  
    if (questionIndex !== -1) {
      // Toggle the 'skip' property for the found question
      sectionQuestions[questionIndex] = {
        ...sectionQuestions[questionIndex],
        answer: value,
      };
    }

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [section]: {
        ...prevAnswers[section],
        [id]: value,
        answer: value,
      },
    }));
  };



  const markAsDone = () => {
    const currentSectionQuestions = questions[QuestionShow].slice(2); // Get the questions in the current section
    const answeredAnNotdSkipped = currentSectionQuestions.filter(
      question => question.answer !== '' && question.skip === false
    );
    
    const AllQuestionsSkipped = currentSectionQuestions.every(
      question => question.skip === true
    );

    const areAllQuestionsAnswered = answeredAnNotdSkipped.length === currentSectionQuestions.length;
  
    if (areAllQuestionsAnswered) {
      if(done[QuestionShow] === false){
        setDone(prevDone => ({
          ...prevDone,
          [QuestionShow]: true,
        }));
      }
      if(done[QuestionShow] === true){
        setDone(prevDone => ({
          ...prevDone,
          [QuestionShow]: false,
        }));
      }    
    } 

    if(AllQuestionsSkipped){
        if(skipped[QuestionShow] === false){
          setSkipped(prevSkipped => ({
            ...prevSkipped,
            [QuestionShow]: true,
          }));
          setDone(prevDone => ({
            ...prevDone,
            [QuestionShow]: true,
          }))
        }
        if(skipped[QuestionShow] === true){
          setSkipped(prevSkipped => ({
            ...prevSkipped,
            [QuestionShow]: false,
          }));
          setDone(prevDone => ({
            ...prevDone,
            [QuestionShow]: false,
          }))
        }
    }
  };


  const skipQ = (section, id) => {
    // Clone the questions object to avoid modifying the state directly
    const updatedQuestions = { ...questions };
  
    // Find the question within the section by ID
    const sectionQuestions = updatedQuestions[section];
    const questionIndex = sectionQuestions.findIndex(question => question.id === id);
  
    if (questionIndex !== -1) {
      // Toggle the 'skip' property for the found question
      sectionQuestions[questionIndex] = {
        ...sectionQuestions[questionIndex],
        skip: true,
      };
      // Update the state with the new questions object
      setskip(updatedQuestions);

    }
  };

  const unskipQ = (section, id) => {
    // Clone the questions object to avoid modifying the state directly
    const updatedQuestions = { ...questions };
  
    // Find the question within the section by ID
    const sectionQuestions = updatedQuestions[section];
    const questionIndex = sectionQuestions.findIndex(question => question.id === id);
  
    if (questionIndex !== -1) {
      // Toggle the 'skip' property for the found question
      sectionQuestions[questionIndex] = {
        ...sectionQuestions[questionIndex],
        skip: false,
      };
      // Update the state with the new questions object
      setskip(updatedQuestions);
    }
  };
  


  if (selectedQuestions) {
    return (
      <>
          <div className='header_section'>
            <div className='header'>
              <div className="section_title">
                {questions[QuestionShow][0].title}
                  <button className={`markAsDone ${questions[QuestionShow][1].done ? 'sectionDone' : ''}`} onClick={() => markAsDone()}>
                    ✔
                  </button>
              </div>
              <div className="toolbar">
                {/*<input type="file" className="imageInput" id="imageInput" accept="image/*" />
                <label htmlFor="imageInput" className="imageInput-label"></label>*/}
                <button className='Download'>Download file</button>
              </div>
            </div>
          </div>

        <div className={`page ${questions[QuestionShow][1].done ? 'done' : ''}`}>
          {selectedQuestions.map((Question) => (
            <div key={Question.id}>
              <div className='section_Question'>
                <div className='Question_Answer'>
                  <div className={`QuestionBox ${Question.skip ? 'skipped-question' : ''}`}>
                    {Question.Question}
                    {Question.skip ?
                      <button className={`unskip ${done[QuestionShow] ? 'skipDisabled' : ''}`} onClick={() => unskipQ(QuestionShow, Question.id)} disabled={done[QuestionShow]}>unskip</button>
                      :
                      <button className={`skip ${done[QuestionShow] ? 'skipDisabled' : ''}`} onClick={() => skipQ(QuestionShow, Question.id)} disabled={done[QuestionShow]} >skip</button>
                    }
                  </div>
                  {Question.skip ?
                    ''
                    :
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
                      disabled={done[QuestionShow]}
                    />                    
                  }

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
