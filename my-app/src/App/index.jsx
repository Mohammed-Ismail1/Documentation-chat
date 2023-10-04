import react, {Component, useEffect, UseState} from 'react';
import './index.css';

export default class Documentation_chat extends Component{
    constructor(props){
        
        /*super() is necessary when defining a constructor in a subclass of 'Component'. 
        It ensures that the Component class is properly initialized before adding any additional properties to the subclass*/
        super(props);

        //This.state is an array where you can change the value (State) of it's content through this.setSate({})
        this.state = {

        };
    }

    render(){
        return(
            <>
            
            <div className='ContentBar'> {/*ContentBar for all the Headers of the documentation*/} 
                <div className='Title'>Chat content</div> {/*Title of the bar*/}
            </div> {/*close the ContentBar div*/} 
            
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