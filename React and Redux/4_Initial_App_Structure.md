# Initial App Structure

## Intro
- Create our first pages
- Create layout
- Configure routing
- Setup navigation

## Create initial Components

### Home component

```js 
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron"> 
                <h1>Pluralsight Administration</h1>
                <p> React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

// this say when some import this component they will say import 
// HomePage from HomePage and the will get a reference to
// the HomePage class 
export default HomePage;
```

### About component

```js 
import React from 'react';

// using class component for the limintation of hot reloading 
// where hot reloading does no work on function components
// if it does not have a parents as a class component 
class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variesty of other helpful libraries</p>
            </div>
        );
    }
}

export default AboutPage;
```

## Create App Layout

Parent component that haouses any markup that we want to display on every page, such as a header or a footer
App.js in the root of the component folder

- React router will passing child components as properties onto our app component, and they will be composed right here on the page.

```js
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p> Header here.. </p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
```

## Configure Routing

- create route.js in the route of our source file

    ### IndexRoute

    - Use then there is just a root path that we want to expose.
    - If somebody go to / path i will load the referenced page in this case HomePage

    ### App component 

    - will always be loaded by placing it at the top like 
        - ` <Route path="/" component={App}> `


```js
import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/home/AboutPage';

export default (
    // with this we say always load the app component and then nest 
    // these other items, pass them as children basend on our routing
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);

``` 

- if /HomePage will be pass to out app component and will end up composed in App.js in the {this.props.children}

## Update Entry Point 

- need to update our app entry point which is index.js
- to do so we need to import router from react router

```js
// for those features that babel cannot transpile you use polyfill  
import 'babel-polyfill';
import React from 'react';
// we have to pull it everytime we are making web development,
// so we have a render function that works in the browser
import {render} from 'react-dom';
// choose a way to handle history in React Router 
// browserHistory gives us nice and clean urls
// use push-states behind the scene
import { Router, browserHistory } from 'react-router';
// we reference our routes.js file
import routes from './routes';

// thanks to web pak we can import css just like we do JavaScript
// and it will end up bundling these files for us intelligently 
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);


```

## Create Header


```js
import React from 'react';
import PropTypes from 'prop-types';
import {Link, IndexLink } from 'react-router';

// activeClassName feature comes with Link and IndexLink
// activeClassName when this link is active go ahead an apply this class for me 
const Header = () => {
    return (
        <nav>   
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            //simple layout a pipe between links
            {" | "} 
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

Header.propTypes = {};

export default Header;
```