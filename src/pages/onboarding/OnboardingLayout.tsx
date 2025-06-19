import React from 'react'
import Aside from './components/Aside'
// import type { ChildrenProps } from '../../utils/types/baseTypes'
import { Outlet, useNavigate } from 'react-router-dom'
import { MoveLeftIcon } from 'lucide-react'

const OnboardingLayout: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='flex w-full max-w-screen '>
      <Aside />
      <main className='bg-white pt-[60px] p-25 min-h-screen w-full flex-1 '>

        <div className='flex w-fit gap-4 items-center mb-[50px] hover:cursor-pointer' onClick={() => navigate(-1)}>
          <MoveLeftIcon strokeWidth={1.14} className='hover:scale-110' />
          <span>Back</span>
        </div>

        <div className='flex-1 flex justify-center items-center h-full'>
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default OnboardingLayout