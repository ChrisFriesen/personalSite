// Question Display
export const DEFAULT_DESTINATIONS = ["A website not listed", "Redirects to another website"];


// URL Fields
export const TLD_JS_FIELDS = ["subdomain", "domain", "tld"];
export const URL_FIELDS = [
    {
        "field": "protocol",
        "name": "scheme",
        "suffix": "//"
    }, {
        "field": "username",
        "name": "username",
        "suffix": ":"
    }, {
        "field": "password",
        "name": "password",
        "suffix": "@"
    }, {
        "field": "subdomain",
        "name": "subdomain",
        "suffix": "."
    }, {
        "field": "domain",
        "name": "domain",
        "suffix": ":"
    }, {
        "field": "port",
        "name": "port",
        "suffix": "/"
    }, {
        "field": "pathname",
        "name": "path",
        "suffix": "?"
    }, {
        "field": "search",
        "name": "query-string",
        "suffix": ""
    }];


// CSS Classes
export const CORRECT_CLASS = "correct-answer";
export const INCORRECT_CLASS = "incorrect-answer";
export const EXPANDED_CLASS = "expanded";
export const CONTRACTED_CLASS = "contracted";