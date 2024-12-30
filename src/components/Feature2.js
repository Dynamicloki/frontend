import { features } from '@/data';
import Image from 'next/image';
import React from 'react';


const Feature2 = ({actual}) => {
  const { feature2 } = actual;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature2;
  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[40px]'>
          <div className="flex-1 order-2 lg:order-1" data-aos='fade-right' data-aos-offset='300'>
            <Image src={image} className='rounded-lg'></Image>
          </div>
          <div className="flex-1 order-1 lg:order-2" data-aos='fade-left' data-aos-offset='400'>
            <div className='pretitle'>{ pretitle }</div>
            <h2 className='title'>{ title }</h2>
            <p className='lead'>{ subtitle }</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} <Image src={btnIcon}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
