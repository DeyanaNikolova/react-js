var rootELement = document.getElementById('root'); // root Dom element
var root = ReactDOM.createRoot(rootELement); // root React element

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

// Use JSX syntax  JavaScript Superset Language


var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        { className: "header-container" },
        React.createElement(
            "h1",
            null,
            "Hello from React!"
        ),
        React.createElement(
            "h2",
            null,
            "Slogan here"
        ),
        React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amett ad ipsa sequi eius, atque earum!"
        )
    ),
    React.createElement(
        "button",
        null,
        "Click"
    )
);
root.render(headerElement);