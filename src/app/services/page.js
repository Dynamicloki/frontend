"use client";
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
// import components
import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Overview from '@/components/Overview.js';
import Product from '@/components/Product.js';
import Testimonials from '@/components/Testimonials.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { useEffect } from "react";
import { hero } from '@/data';
import { NavbarMT } from '@/components/NavbarMT';
import Brands from '@/components/Brands';
import { OurWork } from '@/components/OurWork';

export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []) 
  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.services}/>
      <Overview />
      <Brands/>
      <Product />
      <OurWork/>
      <Testimonials />
      <Cta />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
