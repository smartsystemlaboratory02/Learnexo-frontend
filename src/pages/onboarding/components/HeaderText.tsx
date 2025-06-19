import React from 'react'
import type { ChildrenProps } from '../../../utils/types/baseTypes'

type HeaderTextProps = Partial<ChildrenProps> & {
  title: string
  description?: string
}


const HeaderText: React.FC<HeaderTextProps> = ({ children, title, description }) => {
  return (
    <div className='font-dmsans flex flex-col gap-2 text-[#040308] mb-[]'>
        <h1 className='font-bold text-3xl leading-[32px] capitalize'>{title}</h1>
        <div className='leading-[21px]'>
            <p>{description}{" "}{children}</p>
        </div>
    </div>
  )
}

export default HeaderText