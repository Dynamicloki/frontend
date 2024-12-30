"use client"

const { animatePageOut } = require("@/utils/animations.ts");
const { usePathname,useRouter } = require("next/navigation");

const TransitionLink = (href,label) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if(pathname!==href){
      animatePageOut(href,router);
    }
  }
  
  return(
    <button className='text-xl text-neutral-900 hover:text-accent transition' onClick={handleClick}>{label}</button>
  )
}

export default TransitionLink;