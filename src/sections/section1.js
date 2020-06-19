import React from 'react';
import axios from 'axios';
import Input from '../input';
import Dropdown from '../dropDown';
import UploadPic from '../asset/addPresc.png';


import './section.css';
// import Dispenser from '../asset/NewWEbsiteDispenserM.png';
import Project from './project';


class section1 extends React.Component {
    state = {
        name: '',
        phone: '',
        email: '',
        partner: '',
        files: [],
        thankyou: false,
        discountPane: true,
    };

    componentDidMount() {
        // document.getElementById('discountBanner').style.display = 'none';
        // if (window.innerWidth < 621) {
        //     document.getElementById('discountBannerMob').style.display = 'block';
        // } else {
        //     document.getElementById('discountBannerMob').style.display = 'none';
        // }
    }

    // getBase64 = (file, cb) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = function () {
    //         cb(reader.result);
    //     };
    //     reader.onerror = function (error) {
    //     };
    // }


    // handleSubmit = (e) => {
    //     // eslint-disable-next-line react/destructuring-assignment
    //     e.preventDefault();
    //     const {
    //         name, phone, email, partner, files,
    //     } = this.state;


    //     let checkEmail = false;
    //     let checkphone = false;
    //     if (name !== '' && phone !== '') {
    //         if (phone !== '' && this.validatePhone(phone)) {
    //             console.log(phone);
    //             checkphone = true;
    //             document.getElementById('phoneError').style.display = 'none';
    //             if (email === '' || (email !== '' && this.validateEmail(email))) {
    //                 console.log(email);
    //                 document.getElementById('emailError').style.display = 'none';
    //                 checkEmail = true;
    //                 document.getElementById('formError').style.display = 'none';

    //                 if (name !== '' && phone !== '') {
    //                     axios({
    //                         method: 'post',
    //                         url: 'https://caredose-backend.herokuapp.com/api/users/app_signup.json', // '/api/partners.json',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         data: {
    //                             patient_name: name,
    //                             mobile_number: phone,
    //                             email,
    //                             partner,
    //                             images: files,
    //                             source: 'website',
    //                         },
    //                     })
    //                         .then((response) => {
    //                             if (response.data.status === 'successfully signed up') {
    //                                 this.setState({
    //                                     thankyou: true,
    //                                 });
    //                             }
    //                         })
    //                         .catch((error) => {
    //                             this.setState({
    //                             });
    //                             alert('error', error);
    //                         });
    //                 } else {
    //                     this.setState({
    //                     });
    //                     document.getElementById('formError').style.display = 'block';
    //                 }
    //             } else {
    //                 document.getElementById('emailError').style.display = 'block';
    //             }
    //         } else {
    //             document.getElementById('phoneError').style.display = 'block';
    //         }
    //     } else {
    //         document.getElementById('formError').style.display = 'block';
    //     }
    // }


    // compress = (e) => {
    //     const width = 500;
    //     const height = 300;
    //     const fileName = e.target.files[0].name;
    //     const reader = new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = (event) => {
    //         const img = new Image();
    //         img.src = event.target.result;
    //         // eslint-disable-next-line no-unused-expressions
    //         img.onload = () => {
    //             const elem = document.createElement('canvas');
    //             elem.width = width;
    //             elem.height = height;
    //             const ctx = elem.getContext('2d');
    //             // img.width and img.height will contain the original dimensions
    //             ctx.drawImage(img, 0, 0, width, height);
    //             const data = ctx.canvas.toDataURL(img, 'image/jpeg', 1);
    //             this.setState({
    //                 files: [...this.state.files, data],
    //             });
    //         };
    //         reader.onerror = error => console.log(error);
    //     };
    // }

    // handleChange = (value) => {
    //     this.setState({
    //         partner: value,
    //     });
    // }

    // validateEmail = (email) => {
    //     const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     const result = pattern.test(email);
    //     if (result === true) {
    //         document.getElementById('emailError').style.display = 'none';
    //         return true;
    //     }
    //     document.getElementById('emailError').style.display = 'block';
    //     return false;
    // }

    // validatePhone = (phone) => {
    //     const pattern = /^[6-9]\d{9}$/;
    //     const result = pattern.test(phone);
    //     if (result === true) {
    //         document.getElementById('phoneError').style.display = 'none';
    //         return true;
    //     }
    //     document.getElementById('phoneError').style.display = 'block';
    //     return false;
    // }

    render() {
        return (
            <div id="homeStart" className="sec1Top">
                <div
                    className="sectionView"
                    style={{
                        height: this.state.discountPane ? '100%' : 'calc( 100% - 50px )',
                    }}
                >
                    <div className="Sec1TopLeft">
                        <div className="rw-wrapper" style={{ zIndex: '2', textAlign: 'center', maxHeight: '190px' }}>
                            <h2 className="rw-sentence">
                                <span style={{ fontFamily: "'Lato', sans-serif", color: '#fff' }}>Adherence Technologies for Payer Led Healthcare Systems
                                {/* <br /> for */}
                                </span>
                                {/*<div className="rw-words rw-words-1">
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Diabetes</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Hyper Tension</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Cholestrol</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Heart Disease</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Neuro Disease</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Kidney Disease</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Cancer</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Post Surgery</span>
                                    <span style={{ fontFamily: "'Lato', sans-serif" }}>Pre/Post Natal Care</span>
                                </div> */}
                            </h2>
                            {/* <div id="videoButton" style={{ width: '100%', display: 'flex' }}>
                                <Project />
                            </div> */}
                        </div>
                        <div style={{
                            position: 'relative',
                            // paddingBottom: '30px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '58%',
                            height: '100%',
                        }}
                        >
                            {/* <img src={Dispenser} alt="dispenser" style={{ width: '58%', height: '100%' }} /> */}
                        </div>
                        {/* <div id="discountBannerMob" className="discountBanner">
                            <h2 style={{
                                fontSize: '22px', color: '#ffffff', wordWrap: 'break-word', textAlign: 'center', padding: '5px 20px 20px 0',
                            }}
                            > Upto 20% off on all medicines* &  Caredose @ ₹
                                <span style={{
                                    fontSize: '22px',
                                    color: '#fff',
                                    wordWrap: 'break-word',
                                    textAlign: 'center',
                                    padding: 0,
                                    margin: 0,
                                    textDecoration: 'line-through',
                                }}
                                >
                                    299
                                </span>
                        &nbsp;FREE
                            </h2>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}


export default section1;
