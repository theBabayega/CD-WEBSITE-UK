import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './SimpleModalLauncherStyle';
import SimpleModal from './SimpleModal';
import VideoIcon from '../../asset/play_icon.png';

class SimpleModalLauncher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleToggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { buttonLabel, children, classes } = this.props;
        const { showModal } = this.state;

        return (
            <div>
                <button
                    type="button"
                    style={{ backgroundColor: '#5cc7d8', padding: '9px 15px' }}
                    className={classes.modalButton}
                    onClick={() => this.handleToggleModal()}
                >
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img style={{ height: '17px', marginRight: '5px' }} src={VideoIcon} />
                        {buttonLabel}
                    </div>
                </button>

                {showModal && (
                    <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
                        {children}
                    </SimpleModal>
                )}
            </div>
        );
    }
}

SimpleModalLauncher.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    sheet: PropTypes.object,
    classes: PropTypes.object,
};

export default injectSheet(styles)(SimpleModalLauncher);
