import React from 'react';
import galImg1 from "../../../assets/gal1.png"
import galImg2 from "../../../assets/gal2.png"
import galImg3 from "../../../assets/gal3.png"
import galImg4 from "../../../assets/gal4.png"
import galImg5 from "../../../assets/gal5.png"
import galImg6 from "../../../assets/gal6.png"
import galImg7 from "../../../assets/gal7.png"
import galImg8 from "../../../assets/gal8.png"

import { FaBeer } from "react-icons/fa";

import "./Gallery.css"
import Container from '../../../components/Container/Container';

const Gallery = () => {
    return (
        <div id='gallery-part'>
            <Container>
                <div className="gallery-head text-center">
                    <h3 className='lg:text-[20px] secondaryFont primaryColor font-normal text-[#1B1A1A]pb-2'>Follow Us Now</h3>
                    <h1 className='lg:text-[55px] primaryFont text-[#331A15] font-normal'>Follow on Instagram</h1>
                </div>

                <div className='gal-container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 px-1 pt-[48px]'>
                    <div className="gal">
                        <img className='w-full' src={galImg1} alt="" />
                        <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                        <img className='w-full' src={galImg2} alt="" />
                        <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg3} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg4} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg5} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg6} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg7} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>
                    <div className="gal">
                    <img className='w-full' src={galImg8} alt="" />
                    <div className="overlay flex justify-center items-center">
                            <FaBeer className='w-10 h-10 text-white'></FaBeer>
                        </div>
                    </div>

                </div>

            </Container>
            
        </div>
    );
};

export default Gallery;