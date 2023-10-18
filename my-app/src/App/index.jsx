import react, {Component, useEffect, UseState} from 'react';
import './index.css';
export default class Documentation_chat extends Component{
    constructor(props){
        
        /*super() is necessary when defining a constructor in a subclass of 'Component'. 
        It ensures that the Component class is properly initialized before adding any additional properties to the subclass*/
        super(props);

        //This.state is an array where you can change the value (State) of it's content through this.setSate({})
        this.state = {
            QuestionShow: 'architecture',
        };
    }
    

    
    //render the app
    render(){
        const {QuestionShow} = this.state;
        return(
            <>
            <div className='ContentBar'> {/*ContentBar for all the Headers of the documentation*/} 
                <div className='Title'>Chat content</div> {/*Title of the bar*/}
                    <div className='Content'>
                        <ul><button className='NavBTN' >App scope</button></ul>
                        <ul><button className='NavBTN' >System design & architecture</button></ul>
                        <ul><button className='NavBTN' >General description</button></ul>
                        <ul><button className='NavBTN' >features & requirements</button></ul>
                    </div>
            </div> {/*close the ContentBar div*/} 

            <div className='QuestionDisplay'>
            </div>

            <form action="POST"> {/*use the <form> to be able to POST the user input*/}
                <div className='InputContainer'> {/*add a container to hold the elements for the user input bar*/}

                        <input type="text" className='InputBox' placeholder='Document the application'/> {/*use the <form> to be able to POST the user input*/}
                        <input type="file" className="imageInput" id="imageInput" accept="image/*"/> {/*add a image upload button*/}
                        <label for="imageInput" className="imageInput-label"></label> {/*add a label to the imageInput to make the button an image through css*/}
                        <input type="Submit" className='SubmitBtn' value=''/> {/*add a submit button to submit the user input*/}

                </div> {/*close the InputContainer div*/}
            </form> {/*close the form*/}


            </>
        )
    }
}


//this function will be handeling the answers and the Questions
function Questions(Question_Show){

    //handle the scope questions
    const scope = ()=>{
        const scope_Questions = [
            {id: 1, Question: "What is the name of the App?", answer: ''},
            {id: 2, Question: "what are the goals of the App?", answer: ''},
            {id: 3, Question: "what problems will the app solve?", answer: ''},
            {id: 4, Question: "What will the app cover and what wont it cover?", answer: ''},
        ]
    
        return (
            <>
                <div className='section_title'>App scope</div>
                <div>
                    {scope_Questions.map((Question) => <h1 key={Question.id}>{Question.Question} </h1>)}
                </div>
            </>
          );
    }

    // handle the design and architectire questions
    const design_Architecture = ()=>{
        const archetecture_Questions = [
            {id: 1, Question: "introduction to the architecture of the app", answer: ''},
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


        ]
    
        return (
            <>
                <div className='section_title'>system design & Architecture</div>
                <div>
                    {archetecture_Questions.map((Question) => <h1 key={Question.id}>{Question.Question} </h1>)}
                </div>
            </>
          );
    }

    //handle the general description questions
    const general_Description = ()=>{
        const Description_Questions = [
            {id: 1, Question: "Use cases", answer: ''},
            {id: 2, Question: "Product limitations and constraints", answer: ''},

        ]
    
        return (
            <>
                <div className='section_title'>General description</div>
                <div>
                    {Description_Questions.map((Question) => <h1 key={Question.id}>{Question.Question} </h1>)}
                </div>
            </>
          );
    }

// handle the features and requirements questions
    const features_Requirements = ()=>{
        const features_Questions = [
            {id: 1, Question: "Features", answer: ''},
            {id: 2, Question: "Functional requirements", answer: ''},
            {id: 3, Question: "External interface requirement", answer: ''},
            {id: 4, Question: "Non-functional requirements", answer: ''},

        ]
    
        return (
            <>
                <div className='section_title'>features & Requirements</div>
                <div>
                    {features_Questions.map((Question) => <h1 key={Question.id}>{Question.Question} </h1>)}
                </div>
            </>
          );
    }

    if (Question_Show = 'scope') {
        return features_Requirements();
    } else if (Question_Show = 'architecture') {
        return design_Architecture();
    } else {
        return null; // Return null for other cases
    }
}  

