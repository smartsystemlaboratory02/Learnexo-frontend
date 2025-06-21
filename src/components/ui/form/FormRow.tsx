import type { ChildrenProps } from '../../../utils/types/baseTypes'

const FormRow:React.FC<ChildrenProps> = ({children}) => {
  return (
    <div className='flex justify-between items-center'>
      {children}
    </div>
  )
}

export default FormRow
