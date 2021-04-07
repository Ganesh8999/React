const queryString = require("query-string");
const parsed = queryString.parse(props.location.search);

// is want native then we can use URLSearchParams
const params = new URLSearchParams(props.location.search);
const foo = params.get("name");
