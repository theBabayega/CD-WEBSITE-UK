// this section will be changed, currently holding cards
import './section.css';
import React from 'react';
import DispenserSq from '../asset/dispenser.png';
import ReactCardFlip from 'react-card-flip';
import ReactDOM from 'react-dom';
import Icon1 from '../asset/icon1.png';
import Icon2 from '../asset/icon2.png';
import Icon3 from '../asset/icon3.png';
import Icon4 from '../asset/icon4.png';





class section2 extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped1: false,
            isFlipped2: false,
            isFlipped3: false,
            isFlipped4: false,
            height: 0,
            width: 0,
            prevOpen: 0,

            imageHeight: 0,
            imageWidth: 0,

        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.myDiv = React.createRef();
        this.findHeight = React.createRef();
        // this.refCallback = React.createRef();


    }

    calculateImageRes() {
        var h = window.innerHeight;
        var w = window.innerWidth;
        var temp = ((w - 100) / 4) - 180;

        if (window.innerWidth < 691) {
            console.log(window.innerWidth);
            w = this.state.width
            this.setState({
                imageWidth: window.innerWidth * 0.7 - 60,
            })
        } else {
            this.setState({
                imageWidth: temp
            })
        }



    }
    handleClick1(e) {
        e.preventDefault();
        // if (this.state.isFlipped2 == false && this.state.isFlipped3 == false && this.state.isFlipped4 == false) {
        if (this.state.isFlipped1 == false) {
            this.setState({
                prevOpen: 1,
                isFlipped2: false,
                isFlipped3: false,
                isFlipped4: false
            });
        } else {
            this.setState({ prevOpen: 0 });
        }
        this.setState(prevState => ({ isFlipped1: !prevState.isFlipped1 }));


        // }
    }
    handleClick2(e) {
        e.preventDefault();
        // if (this.state.isFlipped1 == false && this.state.isFlipped3 == false && this.state.isFlipped4 == false) {
        if (this.state.isFlipped2 == false) {
            this.setState({
                prevOpen: 2,
                isFlipped1: false,
                isFlipped3: false,
                isFlipped4: false
            });
        } else {
            this.setState({ prevOpen: 0 });
        }
        this.setState(prevState => ({ isFlipped2: !prevState.isFlipped2 }));
        // }
    }
    handleClick3(e) {
        e.preventDefault();
        // if (this.state.isFlipped1 == false && this.state.isFlipped2 == false && this.state.isFlipped4 == false) {
        if (this.state.isFlipped3 == false) {
            this.setState({
                prevOpen: 3,
                isFlipped1: false,
                isFlipped2: false,
                isFlipped4: false
            });
        } else {
            this.setState({ prevOpen: 0 });
        }
        this.setState(prevState => ({ isFlipped3: !prevState.isFlipped3 }));
        // }
    }
    handleClick4(e) {
        e.preventDefault();
        // if (this.state.isFlipped1 == false && this.state.isFlipped2 == false && this.state.isFlipped3 == false) {
        if (this.state.isFlipped4 == false) {
            this.setState({
                prevOpen: 4,
                isFlipped1: false,
                isFlipped2: false,
                isFlipped3: false
            });
        } else {
            this.setState({ prevOpen: 0 });
        }
        this.setState(prevState => ({ isFlipped4: !prevState.isFlipped4 }));
        // }
    }

    componentDidMount() {
        this.calculateImageRes();
        var node = ReactDOM.findDOMNode(this.refs.findHeight);
    }
    refCallback = element => {
        if (element) {
            console.log(element.getBoundingClientRect().height + '0000    ' + element.getBoundingClientRect().width + '99999999999999999999--------------------------');
            this.setState({
                height: 354,
                width: element.getBoundingClientRect().width,
            })
        }
    };


    render() {

        return (
            window.innerWidth < 691 ?
                <div ref={this.refCallback} style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 30px' }} >
                        <div style={{ textAlign: 'center' }}>
                            <h2> CAREDOSE is designed for payer led systems. </h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', margin: '20px 0' }}>


                            <div style={{ margin: '10px 0', padding: '20px' }}><ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                                <a ref={this.findHeight} onClick={this.handleClick1} style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img ref={this.myDiv} src={Icon1} alt='img' width='100%' />
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4 style={{ fontSize: '22px', }}> Improve health economics ></h4></div>


                                </a>

                                <a onClick={this.handleClick1} style={{ display: 'flex', minHeight: `${this.state.height}px`, justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 10px', width: `${this.state.imageWidth}px` }}><h4 style={{ fontSize: '24px', padding: '15px' }}>CAREDOSE can save upto £4,000 per patient, annually, by reducing healthcare expenditure</h4></div>


                                </a>
                            </ReactCardFlip></div>

                            <div style={{ margin: '10px 0', padding: '20px' }}><ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                                <a onClick={this.handleClick2} style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Icon2} alt='img' width='100%' />
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4 style={{ fontSize: '22px', }}> Optimise resource allocation ></h4></div>


                                </a>

                                <a id="setHeight" onClick={this.handleClick2} style={{ display: 'flex', height: `${this.state.height}px`, justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 10px', width: `${this.state.imageWidth}px` }}><h4 style={{ fontSize: '24px', padding: '15px' }}>CAREDOSEs automation and remote management can reduce load on human resources like pharmacists & caregivers</h4></div>


                                </a>
                            </ReactCardFlip></div>
                            <div style={{ margin: '10px 0', padding: '20px' }}><ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                                <a onClick={this.handleClick3} style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '0px 0', border: "2px solid #EC4D62", position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Icon3} alt='img' width='100%' />
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4 style={{ fontSize: '22px', }}> Reduce pharmaceutical wastage ></h4></div>


                                </a>

                                <a onClick={this.handleClick3} style={{ display: 'flex', height: `${this.state.height}px`, justifyContent: 'center', alignContent: 'center', border: "2px solid #EC4D62", boxShadow: '#00000047 0px 3px 4px 3px', margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 10px', width: `${this.state.imageWidth}px` }}><h4 style={{ fontSize: '24px', padding: '15px' }}>CAREDOSE syncs dispensing and refills with consumption, reducing wastage of prescription drugs</h4></div>


                                </a>
                            </ReactCardFlip></div>
                            <div style={{ margin: '10px 0', padding: '20px' }}><ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped4} flipDirection="horizontal">
                                <a onClick={this.handleClick4} style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src={Icon4} alt='img' width='100%' />
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4 style={{ fontSize: '22px', }}> Reduce cross contamination ></h4></div>
                                </a>
                                <a onClick={this.handleClick4} style={{ display: 'flex', height: `${this.state.height}px`, justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 10px', width: `${this.state.imageWidth}px` }}><h4 style={{ fontSize: '24px', padding: '15px' }}>CAREDOSE enables remote management which results in reduction of exposure and contamination</h4></div>
                                </a>
                            </ReactCardFlip></div>

                        </div >
                    </div >

                </div >

                :
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '0 30px' }} >
                        <div style={{ textAlign: 'center' }}>
                            <h1> CAREDOSE is designed for payer led systems. </h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: '20px 0' }}>


                            <ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped1} flipDirection="horizontal">
                                <a onClick={this.handleClick1} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', padding: '20px' }}>
                                    <div style={{ padding: '10px 50px' }}> <img src={Icon1} alt='img' width={this.state.imageWidth} /></div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Improve health economics ></h4></div>


                                </a>

                                <a onClick={this.handleClick1} style={{ display: 'flex', height: '100%', justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px ', width: `${this.state.imageWidth + 100}px` }}><h3>CAREDOSE can save upto £4,000 per patient, annually, by reducing healthcare expenditure</h3></div>


                                </a>
                            </ReactCardFlip>

                            <ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped2} flipDirection="horizontal">
                                <a onClick={this.handleClick2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', padding: '20px' }}>
                                    <div style={{ padding: '10px 50px' }}><img src={Icon2} alt='img' width={this.state.imageWidth} /></div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Optimise resource allocation ></h4></div>


                                </a>

                                <a onClick={this.handleClick2} style={{ display: 'flex', height: '100%', justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px ', width: `${this.state.imageWidth + 100}px` }}><h3>CAREDOSEs automation and remote management can reduce load on human resources like pharmacists & caregivers</h3></div>


                                </a>
                            </ReactCardFlip>
                            <ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped3} flipDirection="horizontal">
                                <a onClick={this.handleClick3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', padding: '20px' }}>
                                    <div style={{ padding: '10px 50px' }}><img src={Icon3} alt='img' width={this.state.imageWidth} /></div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Reduce pharmaceutical wastage ></h4></div>


                                </a>

                                <a onClick={this.handleClick3} style={{ display: 'flex', height: '100%', justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px ', width: `${this.state.imageWidth + 100}px` }}><h3>CAREDOSE syncs dispensing and refills with consumption, reducing wastage of prescription drugs</h3></div>


                                </a>
                            </ReactCardFlip>
                            <ReactCardFlip flipSpeedBackToFront={0.3} flipSpeedFrontToBack={0.3} isFlipped={this.state.isFlipped4} flipDirection="horizontal">
                                <a onClick={this.handleClick4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', padding: '20px' }}>
                                    <div style={{ padding: '10px 50px' }}><img src={Icon4} alt='img' width={this.state.imageWidth} /></div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Reduce cross contamination ></h4></div>


                                </a>

                                <a onClick={this.handleClick4} style={{ display: 'flex', height: '100%', justifyContent: 'center', alignContent: 'center', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '0px 0', }}>
                                    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px ', width: `${this.state.imageWidth + 100}px` }}><h3>CAREDOSE enables remote management which results in reduction of exposure and contamination</h3></div>


                                </a>
                            </ReactCardFlip>

                        </div>
                    </div>

                </div>
        );

    }
}

export default section2;
