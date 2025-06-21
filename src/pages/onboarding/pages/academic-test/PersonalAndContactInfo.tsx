import FormRow from '../../../../components/ui/form/FormRow'
import Input from '../../../../components/ui/form/Input'
import PageProgress from '../../../../components/ui/form/PageProgress'
import Select from '../../../../components/ui/form/Select'
import MainButton from '../../../../components/ui/MainButton'
import HeaderText from '../../components/HeaderText'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import { genderOptions } from '../../service'

const PersonalAndContactInfo = () => {
    return (
        <div className='flex flex-col gap-10'>
            <PageProgress totalSteps={2} step={1} />
            <HeaderText title='Personal & Contact Information' description='Tell us about yourself so we can personalize your learning experience!'></HeaderText>

            <ImagePlaceholder />

            <form className='flex flex-col gap-10'>
                <FormRow>
                    <Input placeholder='Date of birth' name='dob' width='half' type='date' ></Input>
                    <Select placeholder='Gender' name='dob' width='half' options={genderOptions}></Select>
                </FormRow>


                <FormRow>
                    <Input placeholder='residential address' name='dob' width='half' type='text' ></Input>
                    <Input placeholder='town' name='dob' width='half' type='text' ></Input>
                </FormRow>

                <FormRow>
                    <Input placeholder='state' name='dob' width='half' type='text' ></Input>
                    <Input placeholder='state of origin' name='dob' width='half' type='text' ></Input>
                </FormRow>

                <FormRow>
                    <Select placeholder='Language' name='dob' width='full' options={genderOptions}></Select>
                </FormRow>

                <MainButton>Save and Continue</MainButton>
            </form>
        </div>
    )
}

export default PersonalAndContactInfo