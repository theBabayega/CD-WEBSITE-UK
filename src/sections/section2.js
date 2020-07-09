import React from 'react';
import ResponsivePlayer from '../video';
import '../index.css';
// import 'section3.css';
import ReactSVG from 'react-svg';

import TopQ from '../asset/1-1.svg';
import BotQ from '../asset/1-2.svg';
import B1 from '../asset/b1.png';
import B3 from '../asset/b3.png';



class section8 extends React.Component {
    state = {
        width: 0,
        height: 0,
        marginVideo: 0,
    }

    responsive = window.innerWidth > 1260 ? {
        0: {
            items: 1,
        },
        20: {
            items: 2,
        },
        80: {
            items: 3,
        },
    } : window.innerWidth > 620 ? {
        0: {
            items: 1,
        },
        20: {
            items: 2,
        },
    } : {
                0: {
                    items: 1,
                },
            };

    stagePadding = {
        paddingLeft: 30, // in pixels
        paddingRight: 30,
    };

    setMarginVideo() {
        var temp = window.innerWidth / 2;
        var temp2 = temp * 720 / 1280;
        var temp3 = window.innerHeight - temp2;
        this.setState({
            marginVideo: temp3 / 2
        })
    }

    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
        this.setMarginVideo();
    }

    handleOnDragStart = e => e.preventDefault();


    render() {
        return (
            window.innerWidth < 691 ?

                <div id="testimonialTop" style={{ width: '100%' }}>
                    <div id="mobChange" style={{ display: 'flex', flexDirection: "column" }}>
                        <div style={{
                            width: '100vw', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 20px',
                                textAlign: 'center'
                            }}><h1>CAREDOSE Adherence Technologies</h1></div></div>
                        <div style={{ width: '90vw', margin: 'auto' }}>
                            <div style={{ margin: ' 30px 10px' }}>
                                <ResponsivePlayer />
                            </div>
                        </div>
                        <div style={{
                            width: '100vw', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>

                                {/* <h3 style={{ fontSize: '26px', }}>Solve and track medicine non-adherence from supply chain to consumption, while creating data for healthcare systems</h3>                                <br /> */}
                                {/* <h3 style={{ fontSize: '26px', }}>Conceptualised & tested in India. Expanding soon to the UK</h3><br /><br /><br /> */}
                                <h3 style={{ fontSize: '26px', }}>Solving and tracking medicine non-adherence from supply chain to consumption</h3>
                                <br />
                                <h3 style={{ fontSize: '26px', }}>Creating data & analytics for healthcare systems</h3>
                                <br />
                                <h3 style={{ fontSize: '26px', }}>Expanding soon to the UK.</h3>
                                <br />
                                <h3 style={{ fontSize: '26px', }}>Conceptualised & tested in India</h3>
                                <br />





                            </div>
                        </div>


                    </div>
                    <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '-10vh', left: '20vw', zIndex: '100' }} width='60' src={B1} />
                    </span>

                    <hr />

                </div>
                :
                <div id="testimonialTop" style={{ width: '100%' }}>
                    <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '10vh', left: '60vw', zIndex: '100' }} width='60' src={B3} />
                    </span>
                    <div id="mobChange" style={{ display: 'flex', flexDirection: "row" }}>
                        <div style={{ width: '50vw', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 10px' }}>
                                <ResponsivePlayer />
                            </div>
                        </div>
                        <div style={{
                            width: '50vw', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>

                                <h1>CAREDOSE Adherence Technologies</h1>
                                <h3>Solving and tracking medicine non-adherence from supply chain to consumption</h3>                                <br />
                                <h3>Creating data & analytics for healthcare systems</h3>
                                <h3>Expanding soon to the UK. Conceptualised & tested in India</h3>
                            </div>
                        </div>


                    </div>
                    <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '0vh', left: '20vw', zIndex: '100' }} width='60' src={B1} />
                    </span>


                </div>
        );
    }
}


export default section8;
