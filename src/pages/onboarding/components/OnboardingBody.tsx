import React from 'react'
import Aside from './Aside'
import type { ChildrenProps } from '../../../utils/types/baseTypes'

const OnboardingBody: React.FC<ChildrenProps> = ({children}) => {
  return (
    <div className='flex w-full max-w-screen '>
        <Aside />
        <main className='bg-white p-[100px] min-h-screen w-full flex-1'>{children}</main>
    </div>
  )
}

export default OnboardingBody