import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Section1 from './sections/section1';
import Section4 from './sections/section2';
import Partners from './sections/section3';
import Section5 from './sections/section4';
import Section3 from './sections/section5';
import DoseDroid from './sections/section6';
import Section2 from './sections/section8';
import CU from './sections/section9';
import AU from './sections/au';
import PP from './privacyPolicy';


import Menu from './sections/menu';
import './index.css';

const AppWebsite = () => (
    <div>
        <Menu />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* <DoseDroid /> */}
        <Section5 />
        {/* <CU /> */}
    </div>
);

const App = () => (
    <Router>
        <Switch>
            <Route
                exact
                path="/"
                component={AppWebsite}
            />
            <Switch>
                <Route exact path="/about" component={AU} />
            </Switch>
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
