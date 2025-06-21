import React from 'react'
import type { ChildrenProps } from '../../utils/types/baseTypes';

type TestInstructionProps = ChildrenProps & {
    numberOfQuestions: number;
}

const TestInstruction: React.FC<TestInstructionProps> = ({ children, numberOfQuestions }) => {
    return (
        <div className='shadow-md bg-white px-6 py-4 flex flex-col gap-3 rounded-xl'>
            <p className='text-xl font-medium'>Question 1 - {numberOfQuestions}</p>
            <p>{children}</p>
        </div>
    )
}

export default TestInstruction