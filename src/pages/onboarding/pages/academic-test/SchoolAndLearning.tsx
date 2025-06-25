import FormRow from "../../../../components/ui/form/FormRow"
import Input from "../../../../components/ui/form/Input"
import PageProgress from "../../../../components/ui/form/PageProgress"
import Select from "../../../../components/ui/form/Select"
import MainButton from "../../../../components/ui/MainButton"
import HeaderText from "../../components/HeaderText"

const SchoolAndLearning = () => {
    return (
        <div className="flex flex-col gap-10">
            <PageProgress totalSteps={2} step={2} />
            <HeaderText title="School & Learning Background" description="Share your academic details to help us build your perfect learning path."></HeaderText>

            <form className="flex flex-col gap-10">
                <FormRow>
                    <Input placeholder="School name" name="school" half type="text" ></Input>
                    <Select placeholder="Class" name="class" options={[]} half></Select>
                </FormRow>

                <Select placeholder="Preferred learning style" name="learningStyle" options={[]}></Select>

                <FormRow>
                    <Input placeholder="School name" name="school" half type="text" ></Input>
                    <Select placeholder="Last examination grade" name="lastExamGrade" options={[]} half></Select>
                </FormRow>

                <p className="font-medium text-[22px] text-blue-5">Past Examination Grade</p>

                <FormRow>
                    <Select placeholder="first term grade" name="firstTerm" half options={[]} ></Select>
                    <Select placeholder="second term grade" name="secondTerm" half options={[]} ></Select>
                </FormRow>
                
                <Select placeholder="third term grade" name="thirdTerm" half options={[]} ></Select>

                <MainButton>Proceed to take Test</MainButton>

            </form>
        </div>
    )
}

export default SchoolAndLearning
