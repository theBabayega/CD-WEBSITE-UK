import React from 'react';
import './section.css';


const section1 = () => {
    const a = 0;
    const handleClick = (e) => {
        e.preventDefault();
    };
    return (
        <div id="cu">
            <a
                href="http://maps.google.com/?q=CAREDOSE"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                    backgroundColor: '#f7f7f7', marginTop: '20px', height: '100%', width: '100%',
                }}
            >
                <div style={{ backgroundColor: '#f7f7f7' }}>

                    <div
                        id="contactUsContainer"
                    >
                        <div style={{
                            // margin: '40px 0',
                            backgroundColor: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '220px',
                            maxHeight: '310px',
                            wordWrap: 'break-word',
                            textAlign: 'center',
                            padding: '30px',
                            // marginTop: '40px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px 0 #7a7a7a',
                        }}
                        >
                            <div style={{ fontSize: '20px' }}>
                                <h3>
                                    Contact Us
                                </h3>
                                <p>
                                    Head Office: B1/H4,
                                    Mohan Cooperative Industrial Estate, Mathura Road, New Delhi - 110044
                                </p>
                                <p>------</p>
                                <p>Phone: 080 6191 4280</p>
                                <p>Email: rx@caredose.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <div style={{
                width: '100%',
                height: '70px',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#4a4a4a',
                flexDirection: 'column',

            }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    marginBottom: '10px',
                    borderBottom: '1px solid #4a4a4a',
                    paddingBottom: '10px',
                }}
                >
                    <div>
                        <a href="https://www.caredose.com/TermsAndConditions" rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Lato', sans-serif" }}> Terms and Conditions </a>
                    </div>
                    <div>
                        <a href="https://www.caredose.com/PrivacyPolicy" rel="noopener noreferrer" target="_blank" style={{ fontFamily: "'Lato', sans-serif" }}> Privacy Policy </a>
                    </div>
                    <div>
                        <a href="#whatisCD" style={{ fontFamily: "'Lato', sans-serif" }}> About Us </a>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '96%',
                    justifyContent: 'space-between',
                    margin: '0 2%',
                }}
                >
                    <div>
                        <h5 style={{ fontSize: '12px' }}>Copyright © 2019, CAREDOSE.</h5>
                    </div>
                    <div>
                        <p style={{ fontSize: '12px' }}>* 10% off on medicines + 10% from CAREDOSE for downloading our APP</p>
                    </div>
                </div>


            </div>

            {/* <div style={{
                width: '100%',
                textAlign: 'right',
                display: 'flex',
                color: '#4a4a4a',
            }}
            >
                <p>* 10% off on medicines + 10% from CAREDOSE for downloading our APP</p>
            </div> */}
        </div>
    );
};


export default section1;
