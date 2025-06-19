// import React, { useState } from 'react'

import type { BaseQuestion } from "../../../utils/types/baseTypes";

type OptionProp = {
    label: 'a' | 'b' | 'c' | 'd';
    value: string;
}

type QuestionProps = BaseQuestion & {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const Option: React.FC<Pick<QuestionProps, 'setSelected'| 'selected'> & OptionProp> = ({ label, value, setSelected, selected }) => {   
    return (
        <div className='flex items-start gap-2 group my-' onClick={() => setSelected(label)}>
            <div className={`w-5 h-5 bg-gray-3/30 text-blue-5 ${selected === label && 'bg-green-3 text-white'} rounded-full text-[10px] flex items-center justify-center uppercase font-semibold group-hover:bg-green-3 group-hover:text-white`}>{label}</div>
            <p className='text-[15px] leading-[21px] group-hover:font-bold'>{value}</p>
        </div>
    )
}   

const Question = ({ questionObject }: {questionObject: QuestionProps}) => {
    const { question, options, index, selected, setSelected } = questionObject
    return (
        <div className={`flex items-start gap-6`}>
            <div className='bg-gray-3 text-blue-5 w-[30px] h-[30px] rounded-full text-center flex justify-center items-center text-[18px] font-semibold'>{index}</div>
            <div>
                <p className='font-semibold text-[18px] text-blue-5 mb-2'>{question}</p>
                <div className='flex gap-3 flex-col'>
                    {
                        options.map((option) => (
                            <Option key={option.value} label={option.label as 'a' | 'b' | 'c' | 'd'} value={option.value} setSelected={setSelected} selected={selected} />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Question