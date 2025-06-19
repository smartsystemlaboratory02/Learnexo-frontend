import React from 'react'
import Aside from './components/Aside'
// import type { ChildrenProps } from '../../utils/types/baseTypes'
import { Outlet } from 'react-router-dom'

const OnboardingLayout: React.FC = () => {
  return (
    <div className='flex w-full max-w-screen '>
      <Aside />
      <main className='bg-white p-[100px] min-h-screen w-full flex-1'>
        <Outlet />
      </main>
    </div>
  )
}

export default OnboardingLayout