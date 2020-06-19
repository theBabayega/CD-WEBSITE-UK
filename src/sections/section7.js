import React from 'react';


const section1 = () => {
    const a = 0;
    return (
        <div>
            <div
                id="whyCaredose"
                style={{
                    width: 'Calc(100% - 60px)', textAlign: 'center', backgroundColor: '#b5b5b524', padding: '0 30px',
                }}
            >
                <h2 className="rich-text__heading separator has-animated" style={{ marginBottom: 0, margin: '0px', fontSize: '50px' }}>WHY CAREDOSE?</h2>
            </div>
            <div className="solutionHead">
                <div className="solutionHeadDiv">
                    <div className="solutionTextImage">

                        <div className="solutionSectionHeadDiv" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0013/8860/9649/files/left_image.jpeg?7066')" }}>
                            <div className="solutionSectionHeader">
                                <h4
                                    className="CDSolnHeaderText"
                                    style={{
                                        color: 'white', marginBottom: '25px', fontFamily: "'Lato', sans-serif", fontWeight: '200',
                                    }}
                                >Mismanagement of Medicines leads to
                                </h4>
                                <p className="CDSolnTextBullet">&#8226; Bad Treatment Outcome </p>
                                <p className="CDSolnTextBullet">&#8226; Additional Ailments</p>
                                <p className="CDSolnTextBullet">&#8226; Much Higher Expenditure</p>


                            </div>
                        </div>
                    </div>
                    <div className="solutionTextImage">
                        <div className="solutionSectionHeadDiv" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0013/8860/9649/files/3A4A9554_2048x.JPG?v=1535563465')" }}>
                            <div className="solutionSectionHeader">
                                <h4
                                    className="CDSolnHeaderText"
                                    style={{
                                        color: 'white', marginBottom: '25px', fontFamily: "'Lato', sans-serif", fontWeight: '200',
                                    }}
                                >Managing Medicines is :
                                </h4>
                                <p className="CDSolnTextBullet">&#8226; Time Consuming </p>
                                <p className="CDSolnTextBullet">&#8226; Confusing</p>
                                <p className="CDSolnTextBullet">&#8226; Prone to Error</p>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="solutionBottomText">
                    <a style={{ textDecoration: 'none' }} href="#section2Head">
                        <h2
                            className="caredoseIsSolution"
                        >
                            CAREDOSE is your solution
                        </h2>
                    </a>
                </div> */}
            </div>
        </div>
    );
};


export default section1;
