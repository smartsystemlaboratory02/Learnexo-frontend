import React from 'react'

type TestInstructionProps = {
    numberOfQuestions: number;

}

const TestInstruction: React.FC<TestInstructionProps> = ({ numberOfQuestions }) => {
    return (
        <div className='shadow-md bg-white px-6 py-4 flex flex-col gap-3 rounded-xl'>
            <p className='text-xl font-medium'>Question 1 - {numberOfQuestions}</p>
            <p>From the multiple choice questions, you are to choose answer between option A - D</p>
        </div>
    )
}

export default TestInstruction