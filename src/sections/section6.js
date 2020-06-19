import React from 'react';
import doseDroid from '../asset/dd_dispense_still.png';


const section1 = () => {
    const a = 0;
    return (
        <div id="doseDroidLinkHandle">
            <div className="solutionHead">
                <div className="solutionHeadDiv">
                    <div className="solutionTextImage" style={{ justifyContent: 'center', backgroundColor: '#faf9f6' }}>
                        <div className="solutionSectionHeadDiv" style={{ backgroundImage: `url(${doseDroid})` }}>
                            <div className="solutionSectionHeader">
                                <h4
                                    className="CDSolnHeaderText"
                                    style={{
                                        color: 'white', fontFamily: "'Lato', sans-serif", fontWeight: '500', marginBottom: '30px',
                                    }}
                                >How are medicines Caredosed?
                                </h4>
                                <p className="CDSolnTextBullet">Once we feed a patient's prescription into our software, DoseDroid™ (our proprietary robot) takes over </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="doseDroidText"
                        style={{ backgroundColor: '#faf9f6' }}
                    >
                        <div className="doseDroidContent">
                            <h3 style={{
                                fontSize: '36px', marginBottom: '35px', marginTop: '30px', fontFamily: "'Lato', sans-serif", fontWeight: '500',
                            }}
                            >DoseDroid™ : Automated multi-dose packaging robot, with in-built quality controls
                            </h3>
                            <h3 style={{ fontSize: '18px', marginBottom: '25px' }}>• Cuts medicines into unit pills, retaining the manufacturers packaging</h3>
                            <h3 style={{ fontSize: '18px', marginBottom: '25px' }}>• Sorts & pouches medicines according to prescribed doses</h3>
                            <h3 style={{ fontSize: '18px', marginBottom: '25px' }}>• Labels each dose pouch with dosage directions, in various languages</h3>
                            <h3 style={{ fontSize: '18px', marginBottom: '25px' }}>• Tracks manufacturers information and maintains traceability of each unit pill
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default section1;
