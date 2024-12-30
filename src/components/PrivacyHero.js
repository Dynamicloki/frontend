import Image from 'next/image';
import image from '../assets/img/Privacy/privacy.png';

const PrivacyHero = () => {

  return(
    <section className='min-h-[900px] py-4'>
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-1">
            <h1 className="title mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay='500'>Company Policy</h1>
            <p className="lead mb-5 lg:mb-10" data-aos='fade-down' data-aos-delay='600'>At Systrocode, we are committed to maintaining the trust and confidence of our visitors to our website. In this Privacy Policy, we've provided detailed information on when and why we collect personal information, how we use it, and how we keep it secure.</p>
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

export default PrivacyHero;
