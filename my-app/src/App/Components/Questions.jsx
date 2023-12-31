import React, { useState, useEffect, useRef } from 'react';
import {Getquestions}  from '../index'
import { ExportJSON } from './ExportJson';
import { download } from './download';
// This function will handle the answers and the Questions
export function Questions(QuestionShow, done, setDone, skipped, setSkipped) {

  const [answers, setAnswers] = useState({
    0:{},
    1:{},
  });

  const [/*skip*/, setskip] = useState({
    0:{},
    1:{},
  })

 // const [finished, setFinished] = useState(false)

  // Function to filter object based on keys
  function filterObject(obj, keysToKeep) {
    const filteredObj = {};
    keysToKeep.forEach(key => {
      if (obj.hasOwnProperty(key)) {
        filteredObj[key] = obj[key];
      }
    });
    
    return filteredObj;
  }

  // Define the keys to keep
  const keysToKeep = ['answer', 'skip', 'done'];

  // Filter each section of the data object
  const filteredData = Object.fromEntries(
    Object.entries(Getquestions).map(([section, questions]) => [
      section,
      questions.map(question => filterObject(question, keysToKeep)),
    ])
  );

  console.log(filteredData);

  const selectedQuestions = Getquestions[QuestionShow] ? Getquestions[QuestionShow].filter((question) => question.id) : [];
  const isMounted = useRef(false);// useRef() is used to prevent a re-render when a mutable value is stored or changed

  useEffect(() => {
    // Set initial state based on QuestionShow only when the component mounts

    if (isMounted.current) return;

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      // Iterate through all sections and collect answers
      ...Object.keys(Getquestions).reduce((acc, section) => {
        acc[section] = Getquestions[section].reduce((sectionAnswers, question) => {
          sectionAnswers[question.id] = question.answer;
          return sectionAnswers;
        }, {});
        return acc;
      }, {}),
    }));

    isMounted.current = true;
  }, []);

  const handleAnswerChange = (section, id, value) => {

    const updatedQuestions = { ...Getquestions };

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
    const currentSectionQuestions = Getquestions[QuestionShow].slice(2); // Get the questions in the current section
    const GetDone = Getquestions[QuestionShow][1].done 
    const answeredAnNotdSkipped = currentSectionQuestions.filter(
      question => question.answer !== '' || question.skip === true
    );
    
    const AllQuestionsSkipped = currentSectionQuestions.every(
      question => question.skip === true
    );

    const areAllQuestionsAnswered = answeredAnNotdSkipped.length === currentSectionQuestions.length;
  
    if (areAllQuestionsAnswered) {
      if(done[QuestionShow] || GetDone === false){
        setDone(prevDone => ({
          ...prevDone,
          [QuestionShow]: true,
        }));
      }
      if(done[QuestionShow] || GetDone === true){
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
    const updatedQuestions = { ...Getquestions };
  
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
      setskip((prevAnswers) => ({
        ...prevAnswers,
        [section]: {
          ...prevAnswers[section],
          [id]: updatedQuestions,
          answer: updatedQuestions,
        },
      }));

    }
  };

  const unskipQ = (section, id) => {
    // Clone the questions object to avoid modifying the state directly
    const updatedQuestions = { ...Getquestions };
  
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
      setskip((prevAnswers) => ({
        ...prevAnswers,
        [section]: {
          ...prevAnswers[section],
          [id]: updatedQuestions,
          answer: updatedQuestions,
        },
      }));
    }
  };


  if (selectedQuestions) {
    return (
      <>
          <div className='header_section'>
            <div className='header'>
              <div className="section_title">
                {Getquestions[QuestionShow] ? Getquestions[QuestionShow][0].title : 'No Title'}
                  <button className={`markAsDone`} onClick={() => markAsDone()}>
                  ✔
                  </button>
              </div>
              <div className="toolbar">
                {/*<input type="file" className="imageInput" id="imageInput" accept="image/*" />
                <label htmlFor="imageInput" className="imageInput-label"></label>*/}
                <button className='Save-file' onClick={() => ExportJSON(filteredData)}>Save file</button>
                <button className='Download' onClick={() => download(Getquestions)}>Download file</button>
              </div>
            </div>
          </div>

        <div className={`page ${Getquestions[QuestionShow] ? Getquestions[QuestionShow][1].done ? 'done' : '' : ''}`}>
          {selectedQuestions.map((Question) => (
            <div key={Question.id}>
              <div className='section_Question'>
                <div className='Question_Answer'>
                  <div className={`QuestionBox ${Question.skip? 'skipped-question' : ''}`}>
                    {Question.Question}
                    {Question.skip ?
                      <button
                        className={`unskip ${Getquestions[QuestionShow][1].done ? 'skipDisabled' : ''}`}
                        onClick={() => {
                          unskipQ(QuestionShow, Question.id);
                        }}
                        disabled={Getquestions[QuestionShow][1].done}
                      >
                        unskip
                      </button>
                      :
                      <button
                        className={`skip ${Getquestions[QuestionShow][1].done ? 'skipDisabled' : ''}`}
                        onClick={() => {
                          skipQ(QuestionShow, Question.id);
                        }}
                        disabled={Getquestions[QuestionShow][1].done}
                      >
                        skip
                      </button>
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
                      disabled={Getquestions[QuestionShow][1].done}
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
