import React from 'react';
import { overview } from '@/data';
import Image from 'next/image';

const Overview = () => {

  const { productImg } = overview;
  return (
    <section className='lg:min-h-[712px] bg-[url("../assets/img/overview/bg.svg")] bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className="container mx-auto flex justify-around overflow-hidden">
        <Image src={productImg} data-aos='fade-up' data-aos-offset='300'></Image>
      </div>
    </section>
  );
};

export default Overview;
