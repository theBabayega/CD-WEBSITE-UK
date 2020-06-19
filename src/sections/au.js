import React from 'react';
// import ResponsivePlayer from '../video';
import Image from '../asset/abhayJ.jpeg';
import Menu from '../sections/menu';
import B1 from '../asset/b1.png';
import B3 from '../asset/b3.png';
import '../index.css';

class section8 extends React.Component {
    state = {
        width: 0,
        height: 0,
        imageHeight: 0,
        imageWidth: 0,
    }

    calculateImageRes() {
        var h = window.innerHeight;
        var w = window.innerWidth;
        var temp = (w / 3) - 40;
        var temp2 = ((w - 160) / 3) - 40;
        this.setState({
            imgHeight: temp * 1.5,
            imageWidth: temp,
            imageWidthTm: temp2
        })

    }


    stagePadding = {
        paddingLeft: 30, // in pixels
        paddingRight: 30,
    };

    // setMarginVideo() {
    //     var temp = window.innerWidth / 2;
    //     var temp2 = temp * 720 / 1280;
    //     var temp3 = window.innerHeight - temp2;
    //     this.setState({
    //         marginVideo: temp3 / 2
    //     })
    // }

    componentDidMount() {
        this.setState({ height: window.innerHeight, width: window.innerWidth });
        // this.setMarginVideo();
        this.calculateImageRes();

    }

    handleOnDragStart = e => e.preventDefault();


    render() {
        return (
            window.innerWidth < 691 ?
                <div id="AboutUs" style={{ width: '100%' }}>
                    <Menu />
                    <div style={{ textAlign: 'center', padding: '50px 0  0 0' }}>
                        <h1>Our Story</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", paddingTop: '20px' }}>

                        <div style={{ width: '100%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width='80%' />
                            </div>
                        </div>
                        <div style={{
                            width: '100%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>

                                <h1>Established in 2016</h1>
                                <h3>CAREDOSE was established in 2016 with an aim to solve the silent epidemic of medicine non-adherence. We quickly realised that this problem impacts not just patients but each and every entity in the healthcare spectrum.<br /> Keeping this in mind we conceptualised a comprehensive adherence solution that would solve and track medicine non-adherence from supply chain to consumption.<br /> The solution we have now is a combination of robotics, IoT, AI, hardware & software and is just the starting point of our technology & innovation rollout</h3>                                <br />
                                <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '10vh', left: '10vw', zIndex: '100' }} width='60' src={B3} />
                                </span>
                            </div>
                        </div>



                    </div>
                    <div style={{ display: 'flex', flexDirection: "column-reverse", }}>

                        <div style={{
                            width: '100%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>
                                <h1>Built for the World with a focus on payer led systems</h1>
                                <h3>The CAREDOSE technology ecosystem was conceptualised keeping a global footprint in mind. All systems have been developed in accordance with global standards and the solution is completely modular, allowing for easy customization and integration with existing systems. <br />Our aim was to build an ideal solution for payer led systems i.e. economies where healthcare is managed by public health systems or those with a high penetration of health insurance</h3>                                <br />

                            </div>
                        </div>
                        <div style={{ width: '100%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width='80%' />
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", }}>
                        <div style={{ width: '100%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width='80%' />
                            </div>
                        </div>
                        <div style={{
                            width: '100%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>
                                <h1>Validated with India’s largest healthcare entities</h1>
                                <h3>In the last 4 years we not only developed & tested our technologies but also validated our solutions and services with some of India’s largest healthcare entities including<br />
                                    <b className="extraLineHt">• Ministry of Health • </b><br />
                                    <b className="extraLineHt">• World Health Organisation • </b><br />
                                    <b className="extraLineHt">• MAX Hospitals • </b><br />
                                    <b className="extraLineHt">• Abbott Pharmaceuticals • </b><br />
                                    <b className="extraLineHt">• Apollo Pharmacies • </b>
                                </h3>                                <br />

                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "column-reverse", }}>

                        <div style={{
                            width: '100%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>
                                <h1>Recognised with international accolades</h1>
                                <h3>Our technology and team have been recognised internationally on many occasions and by established entities. Some of them include    <br />
                                    <b className="extraLineHt">• ForbesAsia • </b>   <br />
                                    <b className="extraLineHt">• Harvard University • </b>   <br />
                                    <b className="extraLineHt">• NASDAQ Entrepreneurial Centre • </b>   <br />
                                    <b className="extraLineHt">• NASSCOM • </b>   <br />
                                    <b className="extraLineHt">• Novartis • </b>   <br />
                                    <b className="extraLineHt">• Accenture • </b>
                                </h3>                                <br />

                            </div>
                        </div>
                        <div style={{ width: '100%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width='80%' />
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "column", }}>
                        <div style={{ width: '100%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width='80%' />
                            </div>
                        </div>
                        <div style={{
                            width: '100%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 30px',
                                textAlign: 'center'
                            }}>
                                <h1>Taking our first step into UK</h1>
                                <h3>Now, with our solution developed, tested and validated, we are taking our first step into the UK by partnering with MedTech Wales and executing our technologies for chronic and senior care patients managed by NHS
                            </h3>                                <br />

                            </div>
                        </div>


                    </div>
                    <div id="team" style={{ margin: '30px 30px', display: 'flex', flexDirection: "column", }}>
                        <div style={{ textAlign: 'center' }} >
                            <h1>Our Team</h1>
                        </div>
                        <div style={{ margin: '0 30px 30px 30px', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/gauriangrish/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width='100%' />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Gauri Angrish, Founder & CEO</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/kinshukkocher/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width='100%' />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Kinshuk Kochar, Co-founder & COO</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/shrivatsasomany/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width='100%' />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Shrivatsa Somany, Co-founder & CTO</h4></div>
                            </div>
                        </div>
                    </div>

                </div> : <div id="AboutUs" style={{ width: '100%' }}>
                    <Menu />
                    <div style={{ textAlign: 'center', padding: '50px 0  0 0' }}>
                        <h1>Our Story</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row", paddingTop: '20px' }}>

                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
                            </div>
                        </div>
                        <div style={{
                            width: '50%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>
                                <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '-10vh', left: '0vw', zIndex: '100' }} width='60' src={B1} />
                                </span>
                                <h1>Established in 2016</h1>
                                <h3>CAREDOSE was established in 2016 with an aim to solve the silent epidemic of medicine non-adherence. We quickly realised that this problem impacts not just patients but each and every entity in the healthcare spectrum.<br /> Keeping this in mind we conceptualised a comprehensive adherence solution that would solve and track medicine non-adherence from supply chain to consumption.<br /> The solution we have now is a combination of robotics, IoT, AI, hardware & software and is just the starting point of our technology & innovation rollout</h3>                                <br />
                                <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '10vh', left: '10vw', zIndex: '100' }} width='60' src={B3} />
                                </span>
                            </div>
                        </div>



                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>

                        <div style={{
                            width: '50%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>
                                <h1>Built for the World with a focus on payer led systems</h1>
                                <h3>The CAREDOSE technology ecosystem was conceptualised keeping a global footprint in mind. All systems have been developed in accordance with global standards and the solution is completely modular, allowing for easy customization and integration with existing systems. <br />Our aim was to build an ideal solution for payer led systems i.e. economies where healthcare is managed by public health systems or those with a high penetration of health insurance</h3>                                <br />

                            </div>
                        </div>
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
                            </div>
                        </div>
                        <div style={{
                            width: '50%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>
                                <h1>Validated with India’s largest healthcare entities</h1>
                                <h3>In the last 4 years we not only developed & tested our technologies but also validated our solutions and services with some of India’s largest healthcare entities including<br />
                                    <b>Ministry of Health</b><br />
                                    <b>World Health Organisation</b><br />
                                    <b>MAX Hospitals</b><br />
                                    <b>Abbott Pharmaceuticals</b><br />
                                    <b>Apollo Pharmacies</b>
                                </h3>                                <br />

                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>

                        <div style={{
                            width: '50%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>
                                <h1>Recognised with international accolades</h1>
                                <h3>Our technology and team have been recognised internationally on many occasions and by established entities. Some of them include    <br />
ForbesAsia   <br />
Harvard University   <br />
NASDAQ Entrepreneurial Centre   <br />
NASSCOM   <br />
Novartis   <br />
Accenture
</h3>                                <br />

                            </div>
                        </div>
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
                            </div>
                        </div>


                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <div style={{ width: '50%', margin: 'auto' }}>
                            <div style={{ margin: ' 50px 0px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <ResponsivePlayer /> */}
                                <img style={{ boxShadow: '0 -2px 5px 3px #0000000a' }} className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
                            </div>
                        </div>
                        <div style={{
                            width: '50%', display: 'flex', justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                padding: '0 55px',
                                textAlign: 'center'
                            }}>
                                <h1>Taking our first step into UK</h1>
                                <h3>Now, with our solution developed, tested and validated, we are taking our first step into the UK by partnering with MedTech Wales and executing our technologies for chronic and senior care patients managed by NHS
                            </h3>                                <br />

                            </div>
                        </div>


                    </div>
                    <div id="team" style={{ margin: '30px 30px', display: 'flex', flexDirection: "column", }}>
                        <div style={{ textAlign: 'center' }} >
                            <h1>Our Team</h1>
                        </div>
                        <div style={{ margin: '0 30px 30px 30px', display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }}>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/gauriangrish/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width={this.state.imageWidthTm} />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Gauri Angrish, Founder & CEO</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/kinshukkocher/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width={this.state.imageWidthTm} />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Kinshuk Kochar, Co-founder & COO</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '0 -2px 5px 3px #0000000a', margin: '20px 0', padding: '10px' }}>
                                <a target="_blank" href="https://www.linkedin.com/in/shrivatsasomany/" style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width={this.state.imageWidthTm} />
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Shrivatsa Somany, Co-founder & CTO</h4></div>
                            </div>
                        </div>
                    </div>

                </div>
        );
    }
}


export default section8;
