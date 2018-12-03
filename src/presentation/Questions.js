import React, {Component} from 'react'
import Question from './components/Question'


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
            <div className="wrapper">
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
                        className={this.state.questionTracker === 1 ? null : 'no-display question'}
                    />

                    <Question
                        handleChange={this.props.handleChange}
                        question="How would you rate your most recent meal?"
                        option1Label="delicious"
                        option2Label="good"
                        option3Label="meh"
                        option4Label="gross"
                        buttonText="next question"
                        questionNumber={2}
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 2 ? null : 'no-display'} 
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
                        className={this.state.questionTracker === 3 ? null : 'no-display question'}
                    />

                    <Question
                        handleChange={this.props.handleChange}
                        question="How would you define your day"
                        option1Label="Amazing"
                        option2Label="great"
                        option3Label="bleh"
                        option4Label="bleh"
                        questionNumber={4}
                        buttonText="next question"
                        value={this.props.value}
                        onClick={this.nextQuestion}
                        className={this.state.questionTracker === 4 ? null : 'no-display question'}
                    />
                    {/* this has to be the last question for the application to work */}
                    <Question
                        handleChange={this.props.handleChange}
                        question="How would you define your day"
                        option1Label="Amazing"
                        option2Label="great"
                        option3Label="bleh"
                        option4Label="bleh"
                        questionNumber={5}
                        value={this.props.value}
                        buttonText="Cuddle or not to Cuddle?"
                        onSubmit={this.props.onSubmit}
                        className={this.state.questionTracker === 5 ? null : 'no-display question'}
                        
                        
                    />
            </div>
        )
    }
}

export default Questions