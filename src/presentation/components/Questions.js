import React, {Component} from 'react'
import Question from './Question'


class Questions extends Component {
    constructor(){
        super()
        this.state={
            questionTracker:1
        }
    }
    
    nextQuestion =(e)=>{
        e.preventDefault();
        const questionTracker = this.state.questionTracker + 1
        this.setState({
            questionTracker:questionTracker 
            
        })
    }
//condition will check if the current tract number is equal to this question. ]
    //if ternary
    render(){
        return(
            <div className="question">
                    <Question
                        handleChange={this.props.handleChange}
                        question="How would you define your day"
                        option1Label="Amazing"
                        option2Label="great"
                        option3Label="normal"
                        option4Label="poor"
                        questionTitle="Question 1"
                        buttonText="next question"
                        questionNumber={1}
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 1 ? "questions": 'no-display question'}
                    />

                    <Question
                        handleChange={this.props.handleChange}
                        question="How would you rate your most recent meal?"
                        option1Label="Delicious"
                        option2Label="Good"
                        option3Label="meh"
                        option4Label="Gross"
                        buttonText="next question"
                        questionNumber={2}
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 2 ? "questions": 'no-display'} 
                    />

                    <Question
                        handleChange={this.props.handleChange}
                        question="how often do you workout"
                        option1Label="4x a week"
                        option2Label="2x a week"
                        option3Label="1x a week"
                        option4Label="I dont workout"
                        questionNumber={3}
                        buttonText="next question"
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 3 ? "questions" : 'no-display question'}
                    />

                    <Question
                        handleChange={this.props.handleChange}
                        question="Has any of the following happened to you today?"
                        option1Label="Completed a personal life goal (ex. bought my first home!)"
                        option2Label="Completed a personal daily goal (ex. ate healthy today!)"
                        option3Label="Nothing postive nor nothing negative happened"
                        option4Label="A personal fear came to fruition"
                        questionNumber={4}
                        buttonText="next question"
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 4 ? "questions" : 'no-display question'}
                    />
                    {/* this has to be the last question for the application to work */}
                    <Question
                        handleChange={this.props.handleChange}
                        question="Have you been the best person you could be today?"
                        option1Label="Oh yeah, any better I'd be god"
                        option2Label="Definitely put 80% of an effort to be the best I could be"
                        option3Label="I just stick to myself"
                        option4Label="Ok...I was an asshole today"
                        questionNumber={5}
                        value={this.props.value}
                        buttonText="To Cuddle or not to Cuddle?"
                        onSubmit={this.props.onSubmit}
                        className={this.state.questionTracker === 5 ? "questions" : 'no-display question'}
                        
                        
                    />
            </div>
        )
    }
}

export default Questions