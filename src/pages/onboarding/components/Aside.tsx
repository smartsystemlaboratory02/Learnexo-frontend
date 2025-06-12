// import React from 'react'
import Logo from '../../../components/ui/Logo.tsx'

const Aside = () => {
  return (
    <div className='w-[47.6vw] min-h-screen bg-[#F7F9FC] p-12 pb-16 pl-10 md:p-[100px] md:pb-[10vh] md:pl-20 flex flex-col justify-between'>
      <Logo />

      <div className='font-dmsans flex flex-col w-fit gap-4'>
        <p className='text-blue-5 font-bold text-2xl md:text-[2.5rem] md:leading-[52px]'>We use AI to personalize your learning experience.</p>
        <p className='text-blue-6 leading-[31px]'>Let's build your learning path.</p>
      </div>
    </div>
  )
}

export default Aside