import React from 'react';
// import 'section3.css';
import ReactSVG from 'react-svg';
import Part1 from '../asset/Partner/98.4.svg';
import Part2 from '../asset/Partner/Apollo.svg';
// import Part3 from '../asset/Partner/DOTS.svg';
import Part4 from '../asset/Partner/Max.svg';
// import Part5 from '../asset/Partner/PSRI.svg';
import Part6 from '../asset/Partner/Meds24x7.svg';
import Part7 from '../asset/Partner/Yashoda.svg';

const section1 = window.innerWidth >= 768 ? (
    () => (
        <div id="partnerPharmacy">
            <div style={{
                width: '100%', textAlign: 'center', fontSize: '35px', backgroundColor: '#f1efed',
            }}
            >
                <h2 style={{ padding: '5px 0px 5px 0', fontSize: '42px' }}>Pharmacy Partners</h2>
            </div>
            <div style={{
                width: '100%', textAlign: 'center', fontSize: '30px', backgroundColor: '#f1efed',
            }}
            >
                <h3 style={{
                    fontWeight: '100',
                    // textTransform: 'uppercase',
                    textAlign: 'center',
                    fontSize: '27px',
                    paddingBottom: '10px',
                }}
                >Genuine medicines from certified pharmacies
                </h3>
            </div>
            <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <div className="PartnerStaticContainer">
                        <ReactSVG
                            src={Part1}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw');
                            }}
                        />
                    </div>
                    <div className="PartnerStaticContainer">
                        <ReactSVG
                            src={Part2}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw');
                            }}
                        />
                    </div>
                    <div className="PartnerStaticContainer">
                        <ReactSVG
                            src={Part4}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw');
                            }}
                        />
                    </div>
                    <div className="PartnerStaticContainer">
                        <ReactSVG
                            src={Part7}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw');
                            }}
                        />
                    </div>
                    <div className="PartnerStaticContainer">
                        <ReactSVG
                            src={Part6}
                            beforeInjection={(svg) => {
                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw');
                            }}
                        />
                    </div>

                </div>
            </div>
        </div>
    ))
    : (

        () => {
            const handleOnDragStart = e => e.preventDefault();
            const responsive = {
                0: {
                    items: 1,
                },
                20: {
                    items: 2,
                },
            };
            const stagePadding = {
                paddingLeft: 30, // in pixels
                paddingRight: 30,
            };
            return (
                <div id="partnerPharmacy">
                    <div style={{
                        width: '100%', textAlign: 'center', fontSize: '35px', backgroundColor: '#f1efed',
                    }}
                    >
                        <h2 style={{ padding: '5px 0px 5px 0' }}>Pharmacy Partners</h2>
                    </div>
                    <div style={{
                        width: '100%', textAlign: 'center', fontSize: '30px', backgroundColor: '#f1efed',
                    }}
                    >
                        <h3 style={{
                            fontWeight: '100',
                            // textTransform: 'uppercase',
                            textAlign: 'center',
                            fontSize: '27px',
                            paddingBottom: '10px',
                        }}
                        >Genuine medicines from certified pharmacies
                        </h3>
                    </div>
                    <div style={{ marginBottom: '20px', marginTop: '20px' }}>


                            <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
                                <div className="HIWTopContainerL4Img">
                                    {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
                                    <a href="">
                                        <ReactSVG
                                            src={Part1}
                                            beforeInjection={(svg) => {
                                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw; max-height:300px; max-width:300px; min-width:135px; min-height:135px');
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
                                <div className="HIWTopContainerL4Img">
                                    {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
                                    <a href="">
                                        <ReactSVG
                                            src={Part2}
                                            beforeInjection={(svg) => {
                                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw; max-height:300px; max-width:300px; min-width:135px; min-height:135px');
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>

                            <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
                                <div className="HIWTopContainerL4Img">
                                    {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
                                    <a href="">
                                        <ReactSVG
                                            src={Part4}
                                            beforeInjection={(svg) => {
                                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw; max-height:300px; max-width:300px; min-width:135px; min-height:135px');
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>

                            <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
                                <div className="HIWTopContainerL4Img">
                                    {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
                                    <a href="">
                                        <ReactSVG
                                            src={Part7}
                                            beforeInjection={(svg) => {
                                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw; max-height:300px; max-width:300px; min-width:135px; min-height:135px');
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
                                <div className="HIWTopContainerL4Img">
                                    {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
                                    <a href="">
                                        <ReactSVG
                                            src={Part6}
                                            beforeInjection={(svg) => {
                                                svg.setAttribute('style', 'height: 18vw; width: 18vw; display:flex; margin:0 1vw; max-height:300px; max-width:300px; min-width:135px; min-height:135px');
                                            }}
                                        />
                                    </a>
                                </div>
                            </div>

                    </div>
                </div>
            );
        }
    );


export default section1;


//-------------------------------------------------------------------------------


// <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
//                         <div className="HIWTopContainerL4Img">
//                             {/* <img alt="qwerty" width="260px" style={{ borderRadius: '42px' }} src="https://cdn.shopify.com/s/files/1/0013/8860/9649/files/prescriptionPhoto_square-min_1.png?8747" /> */}
//                             <ReactSVG src={Part6} />
//                         </div>
//                     </div>


// <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
//                         <div className="HIWTopContainerL4Img">
//                             <ReactSVG width="200px" src={Part5} />
//                         </div>
//                     </div>

//                     <div style={{ marginTop: '30px' }} onDragStart={handleOnDragStart}>
//                         <div className="HIWTopContainerL4Img">
//                             <ReactSVG src={Part3} />
//                         </div>
//                     </div>
