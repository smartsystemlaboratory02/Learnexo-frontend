import React from 'react'
import type { ChildrenProps } from '../../../utils/types/baseTypes'

type HeaderTextProps = Partial<ChildrenProps> & {
  title: string
  description?: string
}


const HeaderText: React.FC<HeaderTextProps> = ({ children, title, description }) => {
  return (
    <div className='flex flex-col gap-2 text-blue-5'>
        <h1 className='font-bold text-2xl md:text-3xl md:leading-[32px] capitalize'>{title}</h1>
        <div className='text-[14px] md:text-base md:leading-[21px]'>
            <p>{description}{" "}{children}</p>
        </div>
    </div>
  )
}

export default HeaderText