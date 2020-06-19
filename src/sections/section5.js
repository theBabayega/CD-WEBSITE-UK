// this section will be changed, currently holding cards
import './section.css';
import React from 'react';
import DispenserSq from '../asset/dispenser.png';
import Image from '../asset/abhayJ.jpeg';
import { render } from 'react-dom';
import '../index.css'
import B1 from '../asset/b1.png';
import B3 from '../asset/b3.png';
class section1 extends React.Component {
    state = {
        imageHeight: 0,
        imageWidth: 0,
        AID: '' //active ID for  single click and image greyscale ops.
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
    setBackText = (n1, n2) => {
        // e.preventDefault();
        console.log('The link was clicked.');

        var ele = document.getElementById(n1);
        if (ele.style.display == 'none' && this.state.AID == '') {
            this.setState({
                AID: n2
            });
            ele.style.display = 'block';
            document.getElementById(n2).classList.add("p3Click");
        }
        else if (n2 == this.state.AID) {
            this.setState({
                AID: ''
            });
            ele.style.display = 'none';
            document.getElementById(n2).classList.remove("p3Click");
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
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <a onClick={() => this.setBackText('p3In1', 'imgTech1')} style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech1" src={Image} alt='img' width='100%' />
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
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Monthly dispenser (patients)</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <a onClick={() => this.setBackText('p3In2', 'imgTech2')} style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech2" src={Image} alt='img' width='100%' />
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
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Smart attachment (patients)</h4></div>
                            </div>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <a onClick={() => this.setBackText('p3In3', 'imgTech3')} style={{ backgroundColor: '#000', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width='100%' />
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
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Apps (patients & caregivers)</h4></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '30px 10px', display: 'flex', flexDirection: "column", backgroundColor: '#fff', }}>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <h3 style={{ fontSize: '24px', }}>For healthcare entities</h3>
                        </div>
                        <div style={{ margin: '10px 30px', display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                            <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <a onClick={() => this.setBackText('p3In4', 'imgTech4')} style={{ backgroundColor: '#000', position: 'relative', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech4" src={Image} alt='img' width='100%' />
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
                                </a>
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>DoseDroid (for pharmacies & hospitals)</h4></div>
                            </div><div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                <a onClick={() => this.setBackText('p3In5', 'imgTech5')} style={{ backgroundColor: '#000', position: 'relative', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >  <img className="imgTech" id="imgTech5" src={Image} alt='img' width='100%' />
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
                                <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>Data & Dashboards</h4></div>
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
                                <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <a onClick={() => this.setBackText('p3In1', 'imgTech1')} style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech1" src={Image} alt='img' width={this.state.imageWidth} />
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
                                    </a>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Monthly dispenser (patients)</h4></div>
                                </div>
                                <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <a onClick={() => this.setBackText('p3In2', 'imgTech2')} style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech2" src={Image} alt='img' width={this.state.imageWidth} />
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
                                    </a>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Smart attachment (patients)</h4></div>
                                </div>
                                <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <a onClick={() => this.setBackText('p3In3', 'imgTech3')} style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech3" src={Image} alt='img' width={this.state.imageWidth} />
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
                                    </a>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4> Apps (patients & caregivers)</h4></div>
                                </div>
                            </div>
                        </div>
                        <span style={{ position: 'relative' }}><img style={{ position: 'absolute', top: '0vh', left: '20vw', zIndex: '100' }} width='60' src={B3} />
                        </span>

                        <div style={{ margin: '30px 30px', display: 'flex', flexDirection: "column" }}>

                            <div style={{ textAlign: 'center' }}>
                                <h2>For healthcare entities</h2>
                            </div>

                            <div style={{ margin: '30px 30px', display: 'flex', flexDirection: "row", justifyContent: 'space-evenly' }}>
                                <div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <a onClick={() => this.setBackText('p3In4', 'imgTech4')} style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech4" src={Image} alt='img' width={this.state.imageWidth} />
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
                                    </a>
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>DoseDroid (for pharmacies & hospitals)</h4></div>
                                </div><div className='p3' style={{ display: 'flex', flexDirection: 'column', boxShadow: '#00000047 0px 3px 4px 3px', margin: '20px 0' }}>
                                    <a onClick={() => this.setBackText('p3In5', 'imgTech5')} style={{ backgroundColor: '#000', position: 'relative' }} >  <img className="imgTech" id="imgTech5" src={Image} alt='img' width={this.state.imageWidth} />
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
                                    <div style={{ textAlign: 'center', margin: '20px 0' }}><h4>Data & Dashboards</h4></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div >
        );
    }
}
export default section1;
