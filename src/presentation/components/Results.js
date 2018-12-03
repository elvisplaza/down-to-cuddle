import React, {Component} from 'react'
import resultsProcessing from '../../datalayer/resultsProcessing'

class Results extends Component{
    constructor(){
        super()
        this.state={
            finalAnswer:""
        }
        this.updateResults(this.state.finalAnswer);
    }



    updateResults = (quizValue)=>{
        
        var answer = resultsProcessing.convertValueToResult(quizValue);
        // var answerNum = Number(answer)
        this.setState({
            finalAnswer: answer
        })
        return answer;
    }


    render() {
        // @TODO: This is currently a messy implementation.  There should be a way to more cleanly set and manage the state.  Potentially move the handler to somnewhere else.
        if (this.state.finalAnswer === "") {
            this.updateResults(this.state.finalAnswer);
        }
        return(
            <div className={this.props.className}>
                {resultsProcessing.convertValueToResult(this.props.finalAnswer)}
                <button className="results__button" onClick={this.props.onClick}>Save Results</button>
            </div>
            
        )
    }
}

export default Results 