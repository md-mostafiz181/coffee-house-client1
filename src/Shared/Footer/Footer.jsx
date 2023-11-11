import React, { useRef } from 'react';
import logo from "../../assets/logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Footer.css"
import Container from '../../components/Container/Container';

const Footer = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_c7fysrf', 'template_gr6e37e', form.current, 'py5bZWQpcIzxHpyDa')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id='footer-part'>
            <Container>
            <div className="footer-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 px-1">
                <div className="footer-left w-full">
                    <img src={logo} alt="" />
                    <h1 className='text-[45px] primaryFont primaryColor font-normal pt-[24px] pb-[32px]'>Espresso Emporium</h1>
                    <p className='text-[20px] secondaryFont primaryColor font-normal pb-[32px]'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>

                    <div className="icon-part w-[160px] py-2  flex justify-between">
                       <FaFacebook className='text-3xl primaryColor'></FaFacebook>
                       <FaTwitter className='text-3xl primaryColor'></FaTwitter>
                       <FaInstagram className='text-3xl primaryColor'></FaInstagram>
                       <FaLinkedin className='text-3xl primaryColor'></FaLinkedin>
                    
                    </div>

                    <h2 className='text-[45px] primaryFont primaryColor font-normal pt-[32px] pb-[32px]'>Get in Touch</h2>
                    <p className='text-[20px] primaryColor secondaryFont font-normal'><small >+88 01533 333 333</small></p>
                    <p className='text-[20px] primaryColor secondaryFont font-normal py-[16px]'><small >info@gmail.com</small></p>
                    <p className='text-[20px] primaryColor secondaryFont font-normal'><small >72, Wall street, King Road, Dhaka</small></p>
                </div>
                <div className="footer-right w-full">
                    <h1 className='lg:text-[45px] md:text-[25px] sm:text-[15px] font-normal primaryColor primaryFont pt-[100px]'>Connect with Us</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='w-full py-3 px-3 rounded-sm text-[16px] secondaryFont font-normal' type="text" name="name" id="name" placeholder='Name...' />
                        <input className='mt-4 w-full py-3 px-3 rounded-sm text-[16px] secondaryFont font-normal' type="email" name="email" id="email" placeholder='Email...' />
                        <textarea className='mt-4 w-full py-3 px-3' name="message" id="message" cols="30" rows="10" placeholder='Message...'></textarea>

                        <button className='block px-5 py-2 border rounded-[30px] border-5 border-solid border-[#331A15] mt-6 font-bold primaryColor secondaryFont'>Send Message</button>
                    </form>
                </div>
            </div>
            </Container>
            
        </div>
    );
};

export default Footer;