import * as Constants from "./constants";
import React from "react";
import PropTypes from "prop-types";

export default function UrlStructure(props) {
    return (
        <ul id="url-structure">
            { Constants.URL_FIELDS.map((segment) =>
                <React.Fragment key={ segment.name }>
					<li
                        onMouseEnter={ (e) => props.handleMouseEnter(segment.field, e) }
                        onMouseLeave={ (e) => props.handleMouseLeave(segment.field, e) } >
						{ segment.name }
					</li>
					<li>{ segment.suffix }</li>
				</React.Fragment>
            ) }
        </ul>
    );
}

UrlStructure.propTypes = {
    handleMouseEnter:PropTypes.func,
    handleMouseLeave:PropTypes.func
}