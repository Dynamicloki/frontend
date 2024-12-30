import {HiOutlineChevronDown} from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';

const Hero = ({data}) => {

  const { title, subtitle, btnText, side, image } = data;

  return(
    <section className='min-h-[900px] py-4'>
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left mt-14 lg:mt-2">
          {/* text */}
          <div className="flex-1">
            <h1 className="title mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay='500'>{title}</h1>
            <p className="lead mb-5 lg:mb-10" data-aos='fade-down' data-aos-delay='600'>{subtitle}</p>
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6' data-aos='fade-down' data-aos-delay='700'>
              <Link href='https://wa.me/message/WGWDL3DUG4T7K1'>
                <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
                {btnText}
                  <HiOutlineChevronDown/>
                </button>
              </Link>
              <span className='text-light lg:lead lg:mb-0'>{side}</span>
            </div>
          </div>
          {/* image */}
          <div className='flex-1 text-center' data-aos='fade-up' data-aos-delay='800'>
            <Image src={image} className='flex-1 mx-auto'></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
