import Image from 'next/image';
import React from 'react';
import cta from "../assets/img/cta/cta.png";


const Cta = () => {


  return(
    <section className='section bg-[url("../assets/img/cta/bg.svg")] bg-cover bg-left-top'>
      <div className="container mx-auto min-h-[600px] flex justify-center items-center px-8 py-16 lg:px-16 border-4 border-white rounded-3xl">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          <div className="flex-1">
            <h1 className="title mb-2 lg:mb-5 text-white" data-aos='fade-down' data-aos-delay='500'>Start A New Project Today</h1>
            <p className="lead mb-5 lg:mb-10 text-white" data-aos='fade-down' data-aos-delay='600'>Unlock Your digital Potential - Schedule a Call with Our IT Experts Today!</p>
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6' data-aos='fade-down' data-aos-delay='700'>
              <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center bg-black lg:gap-x-4 mx-auto lg:ml-0 text-white hover:bg-white hover:text-black'>
              Schedule A Free Call
              </button>
            </div>
          </div>
          <div className='flex-1 text-center' data-aos='fade-up' data-aos-delay='800'>
            <Image src={cta} className='flex-1 mx-auto'></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
