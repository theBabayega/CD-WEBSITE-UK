import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './modal/IndexStyles';
import SimpleModalLauncher from './modal/SimpleModalLauncher1';
import './modalCustom.css';

const App = ({ classes }) => {
    const {
        src, key, alt, children,
    } = this.props;
    return (
        <div className={classes.appWrapper}>
            <SimpleModalLauncher>
                <div
                    style={{
                        height: '70vh', width: '70vw', backgroundColor: '#fff', margin: 'auto',
                    }}
                    className={classes.imageModal}
                >
                    <img src={src} alt={alt} key={key} />
                </div>
            </SimpleModalLauncher>
        </div>
    );
};

App.propTypes = {
    sheet: PropTypes.object,
    classes: PropTypes.object,
};

const StyledApp = injectSheet(styles)(App);

export default StyledApp;
