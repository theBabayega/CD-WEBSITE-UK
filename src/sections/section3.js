// this section will be changed, currently holding cards
import './section.css';
import React from 'react';
// import DispenserSq from '../asset/FPACEd.jpg';
import Image from '../asset/dispenser1.png';
import ImgTechA from '../asset/FPACEd.jpg';
import ImgTechD from '../asset/dd_full.png';
import { render } from 'react-dom';
import '../index.css'
import B1 from '../asset/b1.png';
import B3 from '../asset/b3.png';
import B4 from '../asset/homePageLaptop.png';
import B5 from '../asset/FPAC3.jpg';


class section1 extends React.Component {
    state = {
        imageHeight: 0,
        imageWidth: 0,
        AID: '',
        prevID1: '',
        prevID2: '',
        prevID3: '', //active ID for  single click and image greyscale ops.
    };

    calculateImageRes() {
        var h = window.innerHeight;
        var w = window.innerWidth;
        var temp = ((w - 100) / 3) - 40;
        window.innerWidth < 691 ?
            this.setState({
                imgHeight: w * 0.9 * 1.5,
                imageWidth: w * 0.9 - 60,
            })
            :
            this.setState({
                imgHeight: temp * 1.5,
                imageWidth: temp
            })

    }

    componentDidMount() {
        this.calculateImageRes();

    }
    setBackText = (n1, n2, n3) => {
        // e.preventDefault();
        console.log('The link was clicked.');
        this.setState({
            prevID1: n1,
            prevID2: n2,
            prevID3: n3,
        })
        var ele = document.getElementById(n1);
        if (ele.style.display == 'none' && this.state.AID == '') {
            this.setState({
                AID: n2,
            });
            ele.style.display = 'block';
            document.getElementById(n2).classList.add("p3Click");
            document.getElementById(n3).style.backgroundColor = "#000";

        }
        else if (n2 == this.state.AID) {
            this.setState({
                AID: ''
            });
            ele.style.display = 'none';
            document.getElementById(n2).classList.remove("p3Click");
            document.getElementById(n3).style.backgroundColor = "#fff";

        } else {
            var ele1 = document.getElementById(this.state.prevID1);
            this.setState({
                AID: n2
            });
            ele1.style.display = 'none';
            ele.style.display = 'block';
            document.getElementById(this.state.prevID2).classList.remove("p3Click");
            document.getElementById(n2).classList.add("p3Click");
            document.getElementById(this.state.prevID3).style.backgroundColor = "#fff";
            document.getElementById(n3).style.backgroundColor = "#000";


        }

    }
    render() {
        return (
            window.innerWidth < 691 ? <div id="technology" style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: "column", }}>
                    <div style={{ textAlign: 'center', padding: '0 50px' }}>
                        <h1 style={{ fontSize: '36px', fontWeight: '600' }}>Technologies</h1><h3 style={{ fontSize: '20px', }}> A proprietary & comprehensive technology ecosystem that is modular, allowing for easy integration</h3>
                    </div>
                    <div style={{
                        margin: '30px 10px', display: 'flex', flexDirection: "column", backgroundColor: '#fff',
                        // border: '1px solid black'
                    }}>

                        <div style={{ textAlign: 'center', marginTop: '10px' }} >
                            <h3 style={{ fontSize: '24px', }}>For Patients and Caregivers</h3>
                        </div>
                        <div style={{ margin: '10px 30px', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                            <a onClick={() => this.setBackText('p3In1', 'imgTech1', "setBlackM1")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <div id="setBlackM1" style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech1" src={ImgTechA} alt='img' width='100%' />
                                    <div className="p3In" id="p3In1" style={{
                                        position: "absolute", top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                        display: "none",
                                        zIndex: '2',
                                        textAlign: 'center',
                                        width: '70%'
                                    }}><h3 style={{ fontSize: '20px', color: '#ddd' }}>
                                            Monthly medicines are provided to patients pre-organised & labeled by dose, in their choice of language</h3></div>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Monthly dispenser (patients) ></h4></div>
                            </a>
                            <a onClick={() => this.setBackText('p3In2', 'imgTech2', "setBlackM2")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px',  margin: '20px 0' }}>
                                <div id="setBlackM2" style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech2" src={Image} alt='img' width='100%' />
                                    <div className="p3In" id="p3In2" style={{
                                        position: "absolute", top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                        display: "none",
                                        zIndex: '2',
                                        textAlign: 'center',
                                        width: '70%'
                                    }}><h3 style={{ fontSize: '20px', color: '#ddd' }}>
                                            An IoT enabled attachment to the monthly dispenser that enables it to track & communicate non-adherence, to relevant stakeholders, in real time </h3></div>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Smart attachment (patients) ></h4></div>
                            </a>
                            <a onClick={() => this.setBackText('p3In3', 'imgTech3', "setBlackM3")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px',  margin: '20px 0' }}>
                                <div id="setBlackM3" style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech3" src={B5} alt='img' width='100%' />
                                    <div className="p3In" id="p3In3" style={{
                                        position: "absolute", top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                        display: "none",
                                        zIndex: '2',
                                        textAlign: 'center',
                                        width: '70%'
                                    }}><h3 style={{ fontSize: '20px', color: '#ddd' }}>
                                            Apps with timely reminders, actionable alerts, real time tracking & communication and electronic health records. Built to  integrate with existing platforms</h3></div>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Apps (patients & caregivers) ></h4></div>
                            </a>
                        </div>
                    </div>
                    <div style={{ margin: '30px 10px', display: 'flex', flexDirection: "column", backgroundColor: '#fff', }}>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <h3 style={{ fontSize: '24px', }}>For healthcare entities</h3>
                        </div>
                        <div style={{ margin: '10px 30px', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                            <a onClick={() => this.setBackText('p3In4', 'imgTech4', "setBlackM4")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '20px 0' }}>
                                <div id="setBlackM4" style={{ backgroundColor: '#fff', position: 'relative', position: 'relative', display: 'flex' }} >  <img className="imgTech" id="imgTech4" src={ImgTechD} alt='img' width='100%' />
                                    <div className="p3In" id="p3In4" style={{
                                        position: "absolute", top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                        display: "none",
                                        zIndex: '2',
                                        textAlign: 'center',
                                        width: '70%'
                                    }}><h3 style={{ fontSize: '20px', color: '#ddd' }}>
                                            Automated multi-dose packaging robot that packages each patient’s medicine exactly according to prescribed dosage, while maintaining traceability of each pill</h3></div>
                                </div>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>DoseDroid (for pharmacies & hospitals) ></h4></div>
                            </a>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0', border: "2px solid #EC4D62", }}>
                                <a onClick={() => this.setBackText('p3In5', 'imgTech5', "setBlackM5")} id="setBlackM5" style={{ backgroundColor: '#000', position: 'relative', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech5" src={B4} alt='img' width='100%' />
                                    <div className="p3In" id="p3In5" style={{
                                        position: "absolute", top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                        display: "none",
                                        zIndex: '2',
                                        textAlign: 'center',
                                        width: '70%'
                                    }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                            Data analytics and insights shared on customised dashboards, as per requirement</h3></div>
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>Data & Dashboards ></h4></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div > :
                <div id="technology" style={{ width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: "column", }}>
                        <div style={{ textAlign: 'center', padding: '0 50px' }}>
                            <h1>Our Technologies</h1><h3> A proprietary & comprehensive technology ecosystem that is modular, allowing for easy integration</h3>
                        </div>
                        <div style={{
                            margin: '30px 30px', display: 'flex', flexDirection: "column",
                            // border: '1px solid black'
                        }}>
                            <div style={{ textAlign: 'center' }} >
                                <h2>For Patients and Caregivers</h2>
                            </div>
                            <div style={{ margin: '30px 30px', display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }}>
                                <a onClick={() => this.setBackText('p3In1', 'imgTech1', "setBlack1")} className='p3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <div id="setBlack1" style={{ flexGrow: '100', backgroundColor: '#fff', position: 'relative', display: 'flex' }} >  <img className="imgTech" id="imgTech1" src={ImgTechA} alt='img' width={this.state.imageWidth} />
                                        <div className="p3In" id="p3In1" style={{
                                            position: "absolute", top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            display: "none",
                                            zIndex: '2',
                                            textAlign: 'center',
                                            width: '70%'
                                        }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                                Monthly medicines are provided to patients pre-organised & labeled by dose, in their choice of language</h3></div>
                                    </div>
                                    <div style={{ textAlign: 'center', flexGrow: '1', margin: '20px 0' }}><h4> Monthly Dispenser (patients) ></h4></div>
                                </a>
                                <a onClick={() => this.setBackText('p3In2', 'imgTech2', "setBlack2")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <div id="setBlack2" style={{ backgroundColor: '#fff', position: 'relative' }} >  <img className="imgTech" id="imgTech2" src={Image} alt='img' width={this.state.imageWidth} />
                                        <div className="p3In" id="p3In2" style={{
                                            position: "absolute", top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            display: "none",
                                            zIndex: '2',
                                            textAlign: 'center',
                                            width: '70%'
                                        }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                                An IoT enabled attachment to the monthly dispenser that enables it to track & communicate non-adherence, to relevant stakeholders, in real time </h3></div>
                                    </div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Smart Attachment (patients) ></h4></div>
                                </a>
                                <a onClick={() => this.setBackText('p3In3', 'imgTech3', "setBlack3")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px',  margin: '20px 0' }}>
                                    <div id="setBlack3" style={{ backgroundColor: '#fff', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={B5} alt='img' width={this.state.imageWidth} />
                                        <div className="p3In" id="p3In3" style={{
                                            position: "absolute", top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            display: "none",
                                            zIndex: '2',
                                            textAlign: 'center',
                                            width: '70%'
                                        }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                                Apps with timely reminders, actionable alerts, real time tracking & communication and electronic health records. Built to  integrate with existing platforms</h3></div>
                                    </div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Apps (patients & caregivers) ></h4></div>
                                </a>
                            </div>
                        </div>
                        <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '0vh', left: '20vw', zIndex: '1' }} width='60' src={B3} />
                        </span>

                        <div style={{ margin: '30px 30px', display: 'flex', flexDirection: "column" }}>

                            <div style={{ textAlign: 'center' }}>
                                <h2>For healthcare entities</h2>
                            </div>

                            <div style={{ margin: '30px 30px', display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }}>
                                <a onClick={() => this.setBackText('p3In4', 'imgTech4', "setBlack4")} className='p3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #5CC7D8", margin: '20px 0' }}>
                                    <div id="setBlack4" style={{ flexGrow: '100', backgroundColor: '#fff', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech4" src={ImgTechD} alt='img' width={this.state.imageWidth} />
                                        <div className="p3In" id="p3In4" style={{
                                            position: "absolute", top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            display: "none",
                                            zIndex: '2',
                                            textAlign: 'center',
                                            width: '70%'
                                        }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                                Automated multi-dose packaging robot that packages each patient’s medicine exactly according to prescribed dosage, while maintaining traceability of each pill</h3></div>
                                    </div>
                                    <div style={{ flexGrow: '1', textAlign: 'center', margin: '20px 0' }}><h4>DoseDroid (for pharmacies & hospitals) ></h4></div>
                                </a>
                                <a onClick={() => this.setBackText('p3In5', 'imgTech5', "setBlack5")} className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', border: "2px solid #EC4D62", margin: '20px 0' }}>
                                    <div id="setBlack5" style={{ backgroundColor: '#fff', position: 'relative' }} >  <img className="imgTech" id="imgTech5" src={B4} alt='img' width={this.state.imageWidth} />
                                        <div className="p3In" id="p3In5" style={{
                                            position: "absolute", top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            display: "none",
                                            zIndex: '2',
                                            textAlign: 'center',
                                            width: '70%'
                                        }}><h3 style={{ fontSize: '24px', color: '#ddd' }}>
                                                Data analytics and insights shared on customised dashboards, as per requirement</h3></div>
                                    </div>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>Data & Dashboards ></h4></div>
                                </a>
                            </div>
                        </div>

                    </div>

                </div >
        );
    }
}
export default section1;
