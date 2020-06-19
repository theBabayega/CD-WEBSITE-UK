import React from 'react';
import '../index.css';
import ReactSVG from 'react-svg';
import AFI1 from '../asset/AFI/1.png';
import AFI2 from '../asset/AFI/3.png';
import AFI3 from '../asset/AFI/7.png';
import AFI4 from '../asset/AFI/10.png';
import AFI5 from '../asset/AFI/4.png';
import AFI6 from '../asset/AFI/8.png';
import AFI7 from '../asset/AFI/9.png';
import AFI8 from '../asset/AFI/6.png';
import AFI9 from '../asset/AFI/livemint.png';


class Section4 extends React.Component {

    state = {
        fontSize: '0px',
        widthH: '100vw',
        widthB: '100vw',
        direction: 'column',
        marBottom: '0',
    }

    componentDidMount() {
        this.setFont();
    }


    setFont() {
        if (window.innerWidth < 691) {
            this.setState({
                fontSize: '24px',
                widthH: '100%',
                widthB: '80%',
                direction: 'column',
                marBottom: '20px',
            });
        } else {
            this.setState({
                fontSize: '50px',
                widthH: '30%',
                widthB: '70%',
                direction: 'row',
                marBottom: '0',
            });
        }
    }
    render() {
        return (
            <div id="news" style={{ width: '100%', margin: '30px 0' }}>
                <div style={{ display: 'flex', flexDirection: `${this.state.direction}` }}>
                    <div style={{
                        textAlign: 'center', width: `${this.state.widthH}`, display: 'flex', justifyContent: 'center', marginBottom: `${this.state.marBottom}`,
                        alignItems: 'center'
                    }}>
                        <h1 style={{ fontSize: `${this.state.fontSize}`, padding: '0' }}>News</h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: `${this.state.widthB}`, padding: '0 10%' }}>
                        <div className='cell'>
                            <a target="_blank" href="https://www.forbes.com/profile/gauri-angrish/#3da759fb5111"  ><img className='cellIn' src={AFI1} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.nasscom.in/knowledge-center/publications/healthtech-india-are-we-there-yet"><img className='cellIn' src={AFI2} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://inc42.com/buzz/bioasia-2019-in-telangana-here-are-the-top-5-life-sciences-and-healthcare-startups/"><img className='cellIn' src={AFI3} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://yourstory.com/2018/03/forgot-take-medicines-delhi-ncr-based-caredose-will-help-remember?utm_pageloadtype=scroll"><img className='cellIn' src={AFI4} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.business-standard.com/article/pti-stories/caredose-launches-mobile-app-to-help-patients-adhere-to-medication-119071600562_1.html"><img className='cellIn' src={AFI5} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.theweek.in/wire-updates/national/2018/12/08/des11-dl-tb-initiative.html"><img className='cellIn' src={AFI6} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.vccircle.com/nasdaq-entrepreneurial-center-selects-15-finalists-for-india-programme/"><img className='cellIn' src={AFI7} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.facebook.com/watch/?v=667308886969837&external_log_id=5d61547471922e5461998f04420df3a8&q=news%20x%20%23girlpower"><img className='cellIn' src={AFI8} /></a>
                        </div>
                        <div className='cell'>
                            <a target="_blank" href="https://www.livemint.com/Leisure/NFflREWrNqpuVMlDnaAbsI/Beautiful-and-bizarre-things-to-buy-From-wearable-art-to-ti.html"><img className='cellIn' src={AFI9} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Section4;


