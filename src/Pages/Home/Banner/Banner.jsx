import React from "react";
import "./Banner.css";
import Container from "../../../components/Container/Container";

const Banner = () => {
  return (
    <div id="banner-part">
      <Container>
        <div className="banner-text text-center">
          <h1 className="lg:text-[55px] md:text-[30px] sm:text-[20px] primaryFont text-white font-normal">
            Would you like a Cup of Delicious Coffee?
          </h1>

          <p className="lg:text-[16px] md:text-1xl sm:text-1xl text-white font-normal secondaryFont pt-[16px] pb-[32px] px-2">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of <br /> every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <div className="flex justify-center items-center">
          <button className="block px-[22px] py-[9px] bg-[#E3B577] hover:bg-transparent text-[#242222]  hover:text-white border text primaryFont text-[24px] transition-all">
            Learn More
          </button>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
