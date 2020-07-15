import React from "react";
import PropTypes from "prop-types";
import UrlReview from "./UrlReview";
import UrlSyntaxHighlight from "./UrlSyntaxHighlight";

export default class PhishingResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlReviewExpanded: false
        }
        this.toggleUrlReview = this.toggleUrlReview.bind(this);
    }

    toggleUrlReview() {
        this.setState({
            urlReviewExpanded: !this.state.urlReviewExpanded
        })
    }

    render() {
        const score = this.props.questionSet.length - this.props.incorrect.length;

        return (
            <div>
                <UrlReview
                    expanded={ this.state.urlReviewExpanded } />
                <div className="column left-column">
                    <div id="score-box">
                        { score + "/" + this.props.questionSet.length }
                    </div>
                    <button
                        className="button vertical-buttons"
                        onClick={ this.toggleUrlReview }>
                        Review URL structure
                    </button>
                    <button
                        className="button vertical-buttons"
                        onClick={ () => this.props.changeQuestionSet() } >
                        Advanced Questions
                    </button>
                    <p>URLs do not state where the resource is actually located, merely how to go about locating it</p>
                </div>

                <div className="column right-column">
                    <ol>
                        { this.props.questionSet.map((question) =>
                            <li
                                className="url"
                                key={ question.id } >
                                <UrlSyntaxHighlight
                                    urlString={ question.url }
                                    isIncorrect={ this.props.incorrect.includes(question.id) }
                                    field={ "domain" } />
                            </li>
                        ) }
                    </ol>
                </div>
            </div>
        );
    }
}

PhishingResults.propTypes = {
    incorrect: PropTypes.arrayOf(PropTypes.number).isRequired,
    questionSet: PropTypes.array.isRequired,
    changeQuestionSet: PropTypes.func.isRequired,
}