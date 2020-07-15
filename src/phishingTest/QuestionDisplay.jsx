import React from "react";
import * as Constants from "./constants";
import QuestionButtons from "./QuestionButtons";
import PropTypes from "prop-types";


// Shuffles an array randomly
// Inefficient at large sizes
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


export default class QuestionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        const isCorrectAnswer = e.target.value === this.props.question.answer;
        this.props.completeQuestion(isCorrectAnswer);
    }

    render() {
        let allDestinations = this.props.question.destinations.concat(Constants.DEFAULT_DESTINATIONS);
        shuffle(allDestinations);

        return (
            <div id="main-title">
                <h1 className="title-name question">{ this.props.question.url }</h1>
                <h4>Where does this go?</h4>
                <div>
                    <QuestionButtons
                        allOptions={ allDestinations }
                        handleClick={ this.handleClick }
                    />
                </div>
            </div>
        )
    }
}

QuestionDisplay.propTypes = {
    question: PropTypes.object.isRequired,
    completeQuestion: PropTypes.func.isRequired
}