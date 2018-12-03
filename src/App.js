import React, { Component } from 'react';
import firebase from './datalayer/firebase'
import './presentation/styles/App.css';
import Header from './presentation/components/Header';
import Questions from './presentation/components/Questions';
import Introduction from './presentation/components/Introduction'
import Results from './presentation/components/Results'
import resultsProcessing from "./datalayer/resultsProcessing";

const dbRef = firebase.database().ref();

class App extends Component {
  constructor(){
    super();
    this.state = {
      finalAnswer: 0,
      startQuiz: false,
      showQuiz: false,
      userName: "",
      results:false,
      showResults:[]
    }
  }

  componentDidMount(){
    dbRef.on('value',(response)=>{
      console.log(response.val());
      const newState = []
      const data = response.val();
  
      for(let key in data){
        newState.push(data[key])
      }
      this.setState({
        showResults: newState
      });
    });
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    const finalResults = []
    //don't submit unless all the questions have been answered. to do that, check if this.state.answer1, and so on. has a value if it has a value it has a value of which id it was clicked on. 
    const numQuestions = 5;
    for (let i = 1; i <= numQuestions; i++) {
      if (this.state["answer" + i] === undefined || this.state["answer" + i] === null) {
        console.log(`fill out all questions`)
        //check if it has a value(if it exists in the setstate)
        //add all the values if they all exist. 
      } else {
        finalResults.push(this.state["answer" + i])
      }
    }
    let total = finalResults.map((result) => { return Number(result); }).reduce((a, b) => { return a + b })
    this.setState({
      finalAnswer: total,
      results:true,
      showQuiz:false
    })
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  startQuiz = (e) => {
    e.preventDefault();
    this.setState({
      startQuiz: true,
      showQuiz:true
    })
  }

  handleChange2 = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  saveResults=(e)=>{
    e.preventDefault()
    dbRef.push(this.state.finalAnswer)
    this.setState({ results:false})
  }

  render() {
    return <div className="App">
        <Header />
        <Introduction onClick={this.startQuiz} className={this.state.startQuiz === false ? "wrapper introduction" : "no-display"} value={this.state.userName} onChange={this.handleChange2} userName={this.state.userName} />
        <form action="questionaire" onSubmit={this.handleSubmit} className={this.state.showQuiz === true ? "wrapper" : "no-display "}>
          <Questions handleChange={this.handleChange} value={this.value} className={this.state.results === true ? null : "no-display"} />
        </form>
        <Results className={this.state.results === true ? "results wrapper" : "no-display"} finalAnswer={this.state.finalAnswer} onClick={this.saveResults} />
        <ul>
          <h1 className="results__title">Previous Results</h1>
          {this.state.showResults.map(results => {
            var resultString = resultsProcessing.convertValueToResult(results);
            return <li className="results__list wrapper">{resultString}</li>;
          })}
        </ul>
      </div>;
  }
}

export default App;
