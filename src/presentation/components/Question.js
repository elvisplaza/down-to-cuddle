import React from 'react'

const Question = (props) =>{
    return (
        <div className={props.className}>
            <h2 className="questions__title">Question {props.questionNumber}</h2>
            <p>{props.question}</p>

            <div className="questions__options">
                <label htmlFor={`answer${props.questionNumber}`} className="visuallyhidden">{props.option1Label}</label>
                <input
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={20}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <p>{props.option1Label}</p>
            </div>


            <div className="questions__options">
                <label htmlFor={`answer${props.questionNumber}`} className="visuallyhidden">{props.option2Label}</label>
                <input
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={15}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <p>{props.option2Label}</p>
            </div>


            <div className="questions__options">
                <label htmlFor={`answer${props.questionNumber}`} className="visuallyhidden">{props.option3Label}</label>
                <input
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={10}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <p>{props.option3Label}</p>
            </div>

            <div className="questions__options">
                <label htmlFor={`answer${props.questionNumber}`} className="visuallyhidden">{props.option4Label}</label>
                <input
                    type="radio"
                    name={`answer${props.questionNumber}`}
                    value={0}
                    onChange={props.handleChange}
                    className={"questions__options"}
                />
                <p>{props.option4Label}</p>
            </div>

            <button className="questions__button"onClick={props.onClick}>{props.buttonText}</button>
        </div>
    )
}


export default Question