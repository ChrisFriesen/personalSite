import React from "react";
import NavMenu from "../landingPage/nav.jsx";
import "./phishingTest.css";
import "../App.css";
import ResearchFooter from "./ResearchFooter";
import PhishingResults from "./phishingResults";
import QuestionDisplay from "./QuestionDisplay";


const QUESTION_DATA = require("./phishingTestData.json");

function computeSetId() {
	return Math.floor(Math.random() * 2);
}

export default class PhishingTest extends React.Component {
	constructor(props) {
		super(props);

		const setId = computeSetId();
		this.state = {
			questionId: 0,
			incorrect: [],
			questionSet: QUESTION_DATA.standard[setId]
		}
		this.handleAnswer = this.handleAnswer.bind(this);
		this.changeQuestionSet = this.changeQuestionSet.bind(this);
	}

	handleAnswer(isCorrectAnswer) {
		const newQuestionId = this.state.questionId + 1;
		// TODO Optimize for 1 set state call and only new array declaration if required
		let newIncorrect = this.state.incorrect;
		
		if (!isCorrectAnswer) {
			newIncorrect.push(this.state.questionId);
		}

		this.setState({
			incorrect: newIncorrect,
			questionId: newQuestionId
		});
	}

	changeQuestionSet() {
		const setId = computeSetId();

		this.setState({
			questionId: 0,
			incorrect: [],
			questionSet: QUESTION_DATA.advanced[setId]
		});
	}

	render() {
  		const question = this.state.questionSet[this.state.questionId];
  		const resultDisplayed = this.state.questionId === this.state.questionSet.length;

	    return (
	      <div>
	        <NavMenu />
	        <div id='phishingTest-container'>
				{resultDisplayed ?
					<PhishingResults
						incorrect={ this.state.incorrect }
						questionSet={ this.state.questionSet }
						changeQuestionSet={ this.changeQuestionSet }
					/> :
					<QuestionDisplay
						question={ question }
						completeQuestion={ this.handleAnswer }
					/>
				}
				<ResearchFooter />
	        </div>
	      </div>
	    )
  	}
}