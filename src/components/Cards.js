import { product } from '@/data';
import React,{ useState }  from 'react';
import ArrowImg from '../assets/img/product/cards/arrow.png';
import Image from 'next/image';
import Link from 'next/link';

const Cards = () => {
  const [index, setIndex] = useState(1);
  const { cards } = product;
  return( 
    <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px] flex-wrap'>
      {cards.map((card,cardIndex)=>{
        const { icon, title, subtitle, delay, link } = card;

        return( 
        <div key={cardIndex} data-aos='zoom-out' data-aos-offset='300' data-aos-delay='delay'>
          <div onClick={()=>setIndex(cardIndex)} className={`${index===cardIndex && 'bg-white shadow-2xl'} w-[300px] h-[450px] lg:w-[350px] flex flex-col items-center justify-center mx-auto px-4 py-3 text-center rounded-[12px] cursor-pointer transition-all hover:shadow-xl border-2`}>
            <div className="mb-1">
              <Image src={icon} width='200' height='200'></Image>
            </div>
            <div className='mb-1 text-lg font-medium'>{ title }</div>
            <p className='mb-1 text-slate-400 text-base'>{ subtitle }</p>
            {index===cardIndex && <Link href={link}><Image src={ArrowImg} width='40'/></Link>}
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default Cards;
