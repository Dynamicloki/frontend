"use client";
import {useState,useEffect} from 'react';
import { header } from '@/data';
import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';
import MobileNav from './MobileNav';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [mobileNav, setMobileNav] = useState(false);
  const { logo,btnText } = header;
  const [isActive, setIsActive] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  

  return( 
    <header className={`${isActive ? 'lg:top-0 bg-white shadow-2xl' : 'lg:top-[60px]'} py-6 lg:py-4 fixed w-full transition-all z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href='/' data-aos='fade-down' data-aos-delay='1000'>
          <Image src={logo} width='60' height='60'></Image>
        </Link>
        <div className="hidden lg:flex" data-aos='fade-down' data-aos-delay='1200'>
          <Nav/>
        </div>
        <Link href='https://api.whatsapp.com/message/WGWDL3DUG4T7K1?autoload=1&app_absent=0' className='btn btn-sm btn-outline hidden lg:flex' data-aos='fade-down' data-aos-delay='1400'>{btnText}</Link>
        <button className='lg:hidden' onClick={ () => setMobileNav(!mobileNav) } data-aos='fade-down' data-aos-delay='1000'>
          {mobileNav ? (
            <HiOutlineX className='text-3xl text-accent'/>
          ) : (
            <HiMenuAlt4 className='text-3xl text-accent'/>
          ) }
        </button>
        <div className={`${ mobileNav ? 'left-0' : '-left-full' } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all`}>
          <MobileNav/>
        </div>
      </div>
    </header>);
};

export default Header;
