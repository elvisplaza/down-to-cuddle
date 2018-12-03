import React from 'react'

const Question = (props) =>{
    return (
        <div className={props.className}>
            <h2 className="questions__title">Question {props.questionNumber}</h2>
            <p>{props.question}</p>

            <div className="questions__options">
                
                <input
                    id={`answer1`}
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={20}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <label htmlFor={`answer1`} className="">{props.option1Label}</label>
               
            </div>


            <div className="questions__options">
                
                <input
                    id={`answer2`}
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={15}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <label htmlFor={`answer2`} className="">{props.option2Label}</label>
               
            </div>


            <div className="questions__options">
                
                <input
                    id={`answer3`}
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={10}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <label htmlFor={`answer3`} className="">{props.option3Label}</label>
                
            </div>

            <div className="questions__options">
                
                <input
                    id={`answer4`}
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={0}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <label htmlFor={`answer4`} className="">{props.option4Label}</label>
               
            </div>

            <button className="questions__button"onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}


export default Question