import React from 'react';
import Logo from '../asset/Logo_CD.png';
import './section.css';

// var Dropdown = require('react-simple-dropdown');


class menu extends React.Component {

    state = {
        menuPosition: false,
    }

    toggleMenu = () => {
        const temp = this.state.menuPosition;
        this.setState({
            menuPosition: !temp,
        });
    }
    handleCloseLocation = (event) => {
        if (event.target.value == "OS" || event.target.value == "AU") {
            window.open("https://caredose.com/about");
        } else if (event.target.value == "T") {
            window.open("https://caredose.com");
        }

    }
    render() {
        return (
            <div
                // onClick={this.toggleMenu}
                className={this.state.menuPosition ? 'MenuHtController' : 'MenuHtController heightLimit50'}
                style={{
                    position: 'fixed',
                    zIndex: '10',
                    top: '0',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                }}
            >
                <div
                    className="menuImgNav"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '95%',
                        padding: '0 5%',
                    }}
                >
                    <a onClick={this.toggleMenu} style={{ position: 'absolute', top: '20px', left: '10px' }}>
                        {/* <img src={Logo} alt="d" style={{ height: '10px', width: '8px' }} /> */}
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                        <div
                            className="hamburger"
                            style={{
                                width: '21px', height: '3px', backgroundColor: '#000', margin: '3px',
                            }}
                        />
                    </a>
                    <div id="logoContainer" style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={Logo} alt="logo" style={{ height: '40px', margin: 'auto 10px auto auto' }} />
                        <h3 style={{
                            fontFamily: 'BaskervilleLOGO', fontWeight: '100', display: 'flex', alignItems: 'center',
                        }}
                        >CARE<span style={{ fontFamily: 'Baskerville_Italic' }}>DOSE</span>
                        </h3>
                    </div>

                    <div
                        style={{
                            display: this.state.menuPosition ? 'block' : window.innerWidth > 975 ? 'block' : 'none',
                        }}
                    >
                        <div
                            className="navbar"
                        >
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="#homeStart">Home</a>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="#technology">Technologies</a>
                            <select name="cars" id="cars" style={{
                                border: 'none',
                                backgroundColor: '#00000000',
                                fontSize: '17px',
                                fontFamily: 'Lato,sans-serif',
                                textAlign: 'center',
                                color: '#4a4a4a',
                                padding: '13px 16px'
                            }}
                                onChange={event => this.handleCloseLocation(event)} >
                                <option value="AU">About Us</option>
                                <option value="OS">Our Story</option>
                                <option value="T">Team</option>
                            </select>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="#news">News</a>
                            <a style={{ fontFamily: "'Lato', sans-serif" }} href="#cu">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default menu;
