import { product } from '@/data';
import React from 'react';
import Cards from './Cards';


const Product = () => {

  const { title, subtitle } = product;
  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-around lg:flex-row mb-10 lg:mb-20'>
          <h2 className='section-title' data-aos='fade-up' data-aos-offset='400' data-aos-delay='300'>{ title }</h2>
          <p className='lead lg:max-w-[385px]' data-aos='fade-up' data-aos-offset='400' data-aos-delay='400'>{ subtitle }</p>
        </div>
        <Cards/>
      </div>
    </section>
  );
};

export default Product;
