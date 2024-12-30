import Image from "next/image";
import React from "react";
import nextjs from '@/assets/img/overview/brands/nextjs.svg';
import python from '@/assets/img/overview/brands/python.svg';
import powerbi from '@/assets/img/overview/brands/powerbi.svg';
import figma from '@/assets/img/overview/brands/figma.svg';
import wordpress from '@/assets/img/overview/brands/wordpress.svg';
import tableau from '@/assets/img/overview/brands/tableau.svg';
import shopify from '@/assets/img/overview/brands/shopify.svg';
import tailwind from '@/assets/img/overview/brands/tailwind.svg';
import webflow from '@/assets/img/overview/brands/webflow.svg';
import microsoft from '@/assets/img/overview/brands/microsoft.svg';
import mongodb from '@/assets/img/overview/brands/mongodb.svg';
import zoho from '@/assets/img/overview/brands/zoho.svg';
import Marquee from "react-fast-marquee";

const Brands = () => (
  <section className='container mx-auto'>
    <div className="flex flex-col mt-10 mb-2 py-4 px-8 items-center justify-between space-y-10">
      <h1 className='title text-center mx-auto'>Our Technology Partners</h1>
      <Marquee>
        <Image src={microsoft}></Image>
        <Image src={shopify}></Image>
        <Image src={nextjs}></Image>
        <Image src={python}></Image>
        <Image src={powerbi}></Image>
        <Image src={figma}></Image>
        <Image src={wordpress}></Image>
        <Image src={tableau}></Image>
        <Image src={tailwind}></Image>
        <Image src={webflow}></Image>
        <Image src={mongodb}></Image>
        <Image src={zoho}></Image>
      </Marquee>
    </div>
  </section>
);

export default Brands;