import { pricing } from '@/data';
import Image from 'next/image';
import React,{ useState } from 'react';
import { HiCheck, HiOutlineArrowNarrowRight } from 'react-icons/hi';


const Pricing = () => {

  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;
  return( 
    <section className='section'>
      <div className="container mx-auto">
        <h2 className="h2 mb-10 lg:mb-20 text-center" data-aos='fade-up' data-aos-delay='200'>{ title }</h2>
        <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {
            cards.map((card, cardIndex) => {
              const { icon, title, services, price, userAmount, btnText, delay } = card;

              return <div key={cardIndex} data-aos='fade-up' data-aos-delay={delay} data-aos-offset='300'>
                <div onClick={()=>setIndex(cardIndex)} className={`${cardIndex===index ? 'bg-white shadow-2xl' : 'border border-grey' } hover:shadow-xl w-[300px] h-[500px] lg:w-[350px] rounded-[12px] p-[40px] cursor-pointer transition-all`}>
                  <div className='mb-8'>
                    <Image src={icon}/>
                  </div>
                  <div className='text-[32px] font-semibold mb-8'>{ title }</div>
                  <div className='flex flex-col gap-y-2 mb-6'>
                    {
                      services.map((service,index)=>{
                        return <div key={index} className='flex items-center gap-x-[10px]'>
                          <HiCheck className='text-light'/>
                          <div>{service.name}</div>
                        </div>
                      })
                    }
                  </div>
                  <div className='mb-10'>
                    <div>
                      <span className='text-2xl font-semibold'>{ price }/</span>
                      <span className='text-xl text-light font-light'>year</span>
                    </div>
                    <div className='text-base text-light'>
                      {userAmount}
                    </div>
                  </div>
                  <button className={`${ cardIndex===index ? 'bg-accent hover:bg-accentHover text-white' : 'border border-accent text-accent'} btn btn-sm space-x-[14px]`}>
                    <span>{ btnText }</span>
                    <HiOutlineArrowNarrowRight/>
                  </button>
                </div>
              </div>
            })
          }
        </div>
      </div>    
    </section>
  );
};

export default Pricing;
