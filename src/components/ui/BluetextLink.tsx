import React from 'react'
import type { ChildrenProps } from '../../utils/types/baseTypes'

const BlueTextLink: React.FC<ChildrenProps> = ({children}) => {
  return (
    <span className="text-blue-2 cursor-pointer hover:underline">{children}</span> 
  )
}

export default BlueTextLink