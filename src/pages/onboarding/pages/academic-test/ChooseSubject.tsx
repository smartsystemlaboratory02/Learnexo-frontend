// import React from 'react'
import HeaderText from '../../components/HeaderText'
import Select from '../../../../components/ui/form/Select'
import { subjectsOptions } from '../../service'
import MainButton from '../../../../components/ui/MainButton'

const ChooseSubject = () => {
    return (
        <div className='flex flex-col gap-6'>
            <HeaderText title='Academic test' description='Choose a subject to be tested in'></HeaderText>
            <Select name='subjects' placeholder='Choose subjects' options={subjectsOptions}></Select>
            <Select name='subjects' placeholder='Rate your understanding of the subject selected' options={subjectsOptions}></Select>
            <MainButton >Proceed to Questions</MainButton>
        </div>
    )
}

export default ChooseSubject