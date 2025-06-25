import type { ChildrenProps } from '../../../utils/types/baseTypes'

const FormRow:React.FC<ChildrenProps> = ({children}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mlg:flex-col lgd:flex-row">
      {children}
    </div>
  );
}

export default FormRow
