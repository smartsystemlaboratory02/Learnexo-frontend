import React from 'react'
import type { ChildrenProps } from '../../utils/types/baseTypes';

type TestInstructionProps = ChildrenProps & {
    numberOfQuestions: number;
}

const TestInstruction: React.FC<TestInstructionProps> = ({ children, numberOfQuestions }) => {
    return (
      <div className="shadow-md bg-white px-4 py-3 md:px-6 md:py-4 mlg:px-4 mlg:py-3 lgd:px-6 ldg:py-4  flex flex-col gap-3 rounded-xl w-full">
        <p className="text-base md:text-xl mlg:text-base lgd:text-xl font-medium">
          Question 1 - {numberOfQuestions}
        </p>
        <p className="text-xs md:text-base mlg:text-xs lgd:text-base">{children}</p>
      </div>
    );
}

export default TestInstruction