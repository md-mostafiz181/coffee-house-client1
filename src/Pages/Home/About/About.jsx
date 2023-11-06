import React from 'react';
import aboutImg1 from "../../../assets/about1.png"
import aboutImg2 from "../../../assets/about2.png"
import aboutImg3 from "../../../assets/about3.png"
import aboutImg4 from "../../../assets/about4.png"
import "./About.css"
import Container from '../../../components/Container/Container';

const About = () => {
    return (
        <div id='about-part'>
            <Container>
                <div className="about-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-1 ">
                    <div className="about-item w-full px-5 ">
                        <img src={aboutImg1} alt="" />
                        <h2 className='primaryColor lg:text-[35px] primaryFont font-normal pt-4 pb-2 '>Awesome Aroma</h2>
                        <p className='primaryColor lg:text-[16px] font-normal secondaryFont'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div className="about-item w-full px-5">
                    <img src={aboutImg2} alt="" />
                        <h2 className='primaryColor lg:text-[35px] primaryFont font-normal pt-4 pb-2'>High Quality</h2>
                        <p className='primaryColor lg:text-[16px] font-normal secondaryFont'>We served the coffee to you <br /> maintaining the best quality</p>
                    </div>
                    <div className="about-item w-full px-5">
                    <img src={aboutImg3} alt="" />
                        <h2 className='primaryColor lg:text-[35px] primaryFont font-normal pt-4 pb-2'>Pure Grades</h2>
                        <p className='primaryColor lg:text-[16px] font-normal secondaryFont'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div className="about-item w-full px-5">
                    <img src={aboutImg4} alt="" />
                        <h2 className='primaryColor lg:text-[35px] primaryFont font-normal pt-4 pb-2'>Proper Roasting</h2>
                        <p className='primaryColor lg:text-[16px] font-normal secondaryFont'>We served the coffee to you <br /> maintaining the best quality</p>
                    </div>
                </div>

            </Container>
            
            
        </div>
    );
};

export default About;