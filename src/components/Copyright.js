import { copyright } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Copyright = () => {

  const { link1, link2, copyText, social } = copyright;

  return(
    <div className='text-center' data-aos='fade-up' data-aos-offset='0' data-aos-delay='200'>
      <div className='flex-col lg:flex lg:flex-row lg:justify-between'>
        <Link className='hover:text-accent transition text-sm lg:text-lg' href={link1.href}>{link1.name}</Link>
        <p className='transition text-sm lg:text-lg'>{copyText}</p>
      </div>    
    </div>
  );
};

export default Copyright;
