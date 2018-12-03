import React, {Component} from "react";


class Introduction extends Component{
    constructor(){
        super()
        this.state = { 
            finalUserName: false 
        };
    }

    handleSubmit2 = (e) => {
        e.preventDefault();
        const checkUserName = () => {
            if (this.props.userName != "") {
                return true
            } else {
                return false
            }
        }
        this.setState({
            finalUserName: checkUserName()
        })
    };
    handleChange2 = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    

    render(){
        return(
            <div className={this.props.className}>
                <div className="title">
                    <h1>
                        <span className="d">d</span>own <span className="t">
                            t
                        </span>o <span className="c">c</span>uddle
                    </h1>
                </div>
                <form action="" onSubmit={this.handleSubmit2} className="introduction__form">
                    <label htmlFor="userName" className="visuallyhidden ">Please Enter Your Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="introduction__input"
                        value={this.props.userName}
                        onChange={this.props.onChange}

                    />
                    <label htmlFor="submit" className="visuallyhidden">Please enter your name</label>
                    <input
                        type="submit"
                        value="add name"
                        className="introduction__button"
                    />
                </form>
                <div>
                {
                    this.state.finalUserName ? <p className="introduction__instructions">Welcome, <strong>{this.props.userName}</strong> this quiz will help determine if you need to cuddle tonight. If so, should you be the little spoon or big spoon? The quiz will ask you 5 questions about your day.
                    Lets begin!
                <form className="introduction__form">
                    <label className="visuallyhidden" htmlFor="startQuiz">Press submit to start the quiz</label>
                    <input type="submit"
                    id="introduction__submit"
                    type="submit"
                    value="start the quiz"
                    onClick={this.props.onClick}
                    className={this.props.className}
                />
                </form>
                </p> : null
                }
                </div>
            </div>
        )
    }
}
export default Introduction