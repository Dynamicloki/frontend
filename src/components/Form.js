import React from 'react'
import { IonIcon } from '@ionic/react';
import { call,mail,location,logoFacebook,logoLinkedin,logoTwitter,logoInstagram } from 'ionicons/icons';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';


const Form = () => {
  const [state, handleSubmit, reset] = useForm("xrbzborb");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  if (state.succeeded) {
    setSubmitted(true);
    setName('');
    setEmail('');
    setMsg('');
    reset();

}


  return (
    <section className='min-h-[42rem] bg-[url("../assets/img/overview/bg.svg")] bg-cover bg-left-top pt-[30px] lg:pt-[87px] flex justify-center items-center'>
      <div className="container mx-auto flex items-center justify-center w-full overflow-hidden bg-white rounded-t-xl shadow-lg p-8 flex-col lg:flex-row space-y-6 lg:p-14 space-x-4">
        {/* Left side */}
        <div className='flex flex-col justify-between space-y-8 lg:w-1/2'>
          <div>
            <h1 className='title tracking-wide'>Contact Us</h1>
            <p className='pt-2 lead'>Always feel free to reach us out, we'll be happy to help!</p>
          </div>
          <div className='flex flex-col space-y-4'>
            <div className='inline-flex space-x-1 items-center'>
              <IonIcon icon={call} className='text-xl'></IonIcon>
              <span className='pb-2'>+(91) 9672040456</span>
            </div>
            <div className='inline-flex space-x-1 items-center'>
              <IonIcon icon={mail} className='text-xl'></IonIcon>
              <span className='pb-2'>systrocode@gmail.com</span>
            </div>
            <div className='inline-flex space-x-1 items-center'>
              <IonIcon icon={location} className='text-xl'></IonIcon>
              <span className='pb-2'>Jaipur</span>
            </div>
          </div>
          <div className='flex space-x-4 text-lg'>
            <Link href='https://facebook.com/people/Systrocode/61553616951262'>
              <IonIcon icon={logoFacebook}></IonIcon>
            </Link>
            <Link href='https://www.linkedin.com/company/systrocode/'>
              <IonIcon icon={logoLinkedin}></IonIcon>
            </Link>
            <Link href='https://x.com/systrocode'>
              <IonIcon icon={logoTwitter}></IonIcon>
            </Link>
            <Link href='https://www.instagram.com/systrocode/'>
              <IonIcon icon={logoInstagram}></IonIcon>
            </Link>
          </div>
        </div>
        {/* Right side */}
        <div className='lg:w-1/2 bg-white rounded-xl shadow-lg p-8'>
          <form onSubmit={handleSubmit}>
            <div className='w-full flex flex-col my-4'>
              <label htmlFor="name" className='font-bold text-gray-800'>Name:</label>
              <input type="text" name='name' value={name} required id="name" placeholder='Your Name' className='p-4 bg-gray-50 border border-gray-100 rounded-xl' onChange={(e)=>setName(e.target.value)}/>
              <ValidationError prefix="Name" field="name" errors={state.errors}/>
            </div>
            <div className='w-full flex flex-col my-4'>
              <label htmlFor="email" className='font-bold text-gray-800'>Email:</label>
              <input type="email" required id="email" name="email" value={email} placeholder='Your email' className='p-4 bg-gray-50 border border-gray-100 rounded-xl' onChange={(e)=>setEmail(e.target.value)}/>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            <div className='w-full flex flex-col my-4'>
              <label htmlFor="message" className='font-bold text-gray-800'>Message:</label>
              <textarea name="message" value={msg} required id="message" placeholder='Your Message' className='p-4 bg-gray-50 border border-gray-100 rounded-xl' onChange={(e)=>setMsg(e.target.value)}></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </div>
            <button type="submit" disabled={state.submitting} className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4 w-full'>Submit</button>
            {submitted && <p className='mt-4'>Thanks for Submitting, We'll get back to you soon!</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form