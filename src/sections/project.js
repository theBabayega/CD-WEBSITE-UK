import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './modal/IndexStyles';
import SimpleModalLauncher from './modal/SimpleModalLauncher';
// import './modal.css';

const App = ({ classes }) => {
    const h = window.innerHeight;
    const w = window.innerWidth;
    let wid = 0;
    let hei = 0;
    const r2 = h / w;
    if (w < 620) {
        wid = (window.innerWidth * 0.95);
        hei = (0.560 * (window.innerWidth * 0.95));
    } else if (r2 > 1) {
        wid = (window.innerWidth * 0.90);
        hei = (0.560 * (window.innerWidth * 0.90));
    } else if (r2 < 1) {
        hei = (window.innerHeight * 0.70);
        wid = (1.785 * (window.innerHeight * 0.70));
    } else {
        // wid = 500;
        // hei = 280;
    }
    return (

        <div className={classes.appWrapper}>
            <SimpleModalLauncher buttonLabel="Watch Video">
                <div
                    className="modalContainer"
                    style={{
                        margin: 'auto',
                        width: `${wid}px`,
                        height: `${hei}px`,
                    }}
                >
                    <iframe
                        title="Caredose"
                        height="100%"
                        width="100%"
                        src="https://www.youtube.com/embed/D8bgLye_U2k"
                    />
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


// import React from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';
// import injectSheet from 'react-jss';
// import styles from './modal/IndexStyles';
// import SimpleModalLauncher from './modal/SimpleModalLauncher';
// // import './modal.css';

// const App = ({ classes }) => {
//     const h = window.innerHeight;
//     const w = window.innerWidth;
//     let wid = 0;
//     let hei = 0;
//     if ((w / h) < 0.560) {
//         wid = (window.innerWidth * 0.95);
//         hei = (0.560 * (window.innerWidth * 0.95));
//     } else if ((h / w) > 1) {
//         hei = (window.innerHeight * 0.70);
//         wid = (1.785 * (window.innerHeight * 0.70));
//     } else if ((w / h) < 1) {
//         wid = (window.innerWidth * 0.70);
//         hei = (0.560 * (window.innerWidth * 0.70));
//     }
//     return (

//         <div className={classes.appWrapper}>
//             <SimpleModalLauncher buttonLabel="Watch Video">
//                 <div
//                     className="modalContainer"
//                     style={{
//                         margin: 'auto',
//                         width: `${wid}`,
//                         height: `${hei}`,
//                     }}
//                 >
//                     <iframe
//                         title="Caredose"
//                         height="100%"
//                         width="100%"
//                         src="https://www.youtube.com/embed/D8bgLye_U2k"
//                     />
//                 </div>
//             </SimpleModalLauncher>
//         </div>
//     );
// };

// App.propTypes = {
//     sheet: PropTypes.object,
//     classes: PropTypes.object,
// };

// const StyledApp = injectSheet(styles)(App);

// export default StyledApp;
