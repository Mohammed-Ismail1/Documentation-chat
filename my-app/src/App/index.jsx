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
            <form action="POST">
                <div className='InputContainer'>
                    
                        <input type="text" className='InputBox'/>

                        <input type="file" className="imageInput" id="imageInput" accept="image/*" />

                        <label for="imageInput" className="imageInput-label"></label>

                        <input type="Submit" className='SubmitBtn' value=''/>
                </div>
            </form>

            </>
        )
    }
}