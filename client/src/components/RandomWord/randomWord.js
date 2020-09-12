import React,{ Component} from 'react';
import { randomWord } from '../WordList';



class drawWord extends Component {
    constructor(props){
        super(props);
        this.state = {
            answer: randomWord()
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}

export default drawWord;