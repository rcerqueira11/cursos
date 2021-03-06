import React from 'react';
import Button from '../common/Button';

// using class component for the limintation of hot reloading
// where hot reloading does no work on function components
// if it does not have a parents as a class component
class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses React, Redux, React Router and a variesty of other helpful libraries</p>
                <Button
                    label="Holis"
                />
            </div>
        );
    }
}

export default AboutPage;
