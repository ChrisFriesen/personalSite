import * as Constants from "./constants";
import React from "react";
import PropTypes from "prop-types";


const TLD_JS = require("tldjs");


function escapeString(inputString) {
    return inputString ? inputString.replace(/[/+.?]/g, "\\$&") : inputString;
}


export default function UrlSyntaxHighlight(props) {
    const highlightClassName =
        props.isIncorrect ? Constants.INCORRECT_CLASS : Constants.CORRECT_CLASS;

    let url;
    if (Constants.TLD_JS_FIELDS.includes(props.field)) {
        url = TLD_JS.parse(props.urlString);
    } else {
        url = new URL(props.urlString);
    }

    if (!url[props.field]) {
        return props.urlString;
    }

    const escapedUrl = escapeString(url[props.field]);
    const pattern = new RegExp(`(${ escapedUrl })`);
    const segments = props.urlString.split(pattern);

    return (segments.map(segment =>
        (segment.match(pattern) ?
            <span className={ highlightClassName }>{ url[props.field] }</span> :
            segment)));
}

UrlSyntaxHighlight.propTypes = {
    field: PropTypes.string.isRequired,
    urlString: PropTypes.string.isRequired,
    isIncorrect: PropTypes.bool
}