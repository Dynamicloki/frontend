"use client";
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
// import components
import Header from '@/components/Header.js';
import Hero from '@/components/Hero.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import Product from '@/components/Product.js';
import Testimonials from '@/components/Testimonials.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { useEffect } from "react";
import { cyberSec, features, hero } from '@/data.js';
import { NavbarMT } from '@/components/NavbarMT';
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
      <Hero data={hero.cybersecurity}/>
      <Brands />
      <Feature1 actual = {cyberSec} />
      <Product />
      <OurWork/>
      <Testimonials />
      <Cta/>
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
