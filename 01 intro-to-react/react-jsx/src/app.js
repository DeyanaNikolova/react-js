const rootELement = document.getElementById('root');  // root Dom element
const root = ReactDOM.createRoot(rootELement); // root React element

// const headingElement = React.createElement('h1', {}, 'Hello from React!');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

// Use JSX syntax  JavaScript Superset Language


const headerElement = (
    <div>
    <header className="header-container">
        <h1>Hello from React!</h1>
        <h2>Slogan here</h2>
        <p>Lorem ipsum dolor sit amett ad ipsa sequi eius, atque earum!</p>
    </header>
    <button>Click</button>
    </div>
);
root.render(headerElement);




