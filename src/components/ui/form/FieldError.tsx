import type { ChildrenProps } from "../../../utils/types/baseTypes"

const FieldError: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="text-red-500 text-sm mt-1 animate-fade-left duration-100 z-10">
      {children}
    </div>
  )
}

export default FieldError
