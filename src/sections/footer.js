import React from 'react';
import axios from 'axios';
import Input from '../input';
import Dropdown from '../dropDown';


import './section.css';
import Project from './project';

class Footer extends React.Component {

    state = {
        fontSize: '0px',
        widthH: '100vw',
        widthB: '100vw',
        direction: 'column',
        marBottom: '0',
    }

    componentDidMount() {
        this.setFont();
    }


    setFont() {
        if (window.innerWidth < 691) {
            this.setState({
                fontSize: '24px',
                widthH: '100%',
                widthB: '80%',
                direction: 'column',
                marBottom: '20px',
            });
        } else {
            this.setState({
                fontSize: '50px',
                widthH: '30%',
                widthB: '70%',
                direction: 'row',
                marBottom: '0',
            });
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: '#222', width: '100%', }}>
                <div id="cu" style={{ width: '100%', margin: '30px 0 0 0', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: `${this.state.direction}` }}>
                        <div style={{
                            textAlign: 'center', width: `${this.state.widthH}`, display: 'flex', justifyContent: 'center', marginBottom: `${this.state.marBottom}`,
                            alignItems: 'center'
                        }}>
                            <h1 style={{ fontSize: `${this.state.fontSize}`, padding: '30px 0 0 0', color: '#fff' }}>Contact us</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: `${this.state.widthB}`, padding: '0 2% 0 10%' }}>
                            <a target="_blank" href="mailto:gauri@caredose.com"><h2 style={{ padding: '20px 20px 10px 0', color: '#fff', fontSize: '20px' }}>Email:&nbsp;<span style={{ color: '#337ab7', fontSize: '18px' }}> gauri@caredose.com</span> </h2></a>
                            <a target="_blank" href="https://goo.gl/maps/KugMAmqvkGDSsTtN8"><h2 style={{ padding: '10px 20px 20px 0', color: '#fff', fontSize: '20px' }}>Address: &nbsp; <span style={{ color: '#337ab7', fontSize: '18px' }}> Innovation House Newport Road Magor, Caldicot, Gwent, United Kingdom, NP26 3DG</span></h2></a>

                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h6 style={{ padding: '10px 0' }}>© 2020 Caredose. All Rights Reserved.</h6>

                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;
