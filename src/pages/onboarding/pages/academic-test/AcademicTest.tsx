// import React from 'react'

import { useNavigate, useParams } from "react-router-dom"
import HeaderText from "../../components/HeaderText"
import { Questions } from "../../service"
import TestInstruction from "../../components/TestInstruction"
import Question from "../../components/Question"
import { useState } from "react"
import type { BaseQuestion } from "../../../../utils/types/baseTypes"
import WhiteButton from "../../../../components/ui/WhiteButton"
import MainButton from "../../../../components/ui/MainButton"

const numberOfQuestions = Questions.length

const AcademicTest = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [selected, setSelected] = useState<string>("")

    let question = Questions.find((question) => question.index.toString() === id)

    if (!id) {
        return <div>Question not found</div>
    }

    if (!question) {
        return <div>Question not found</div>
    }

    const questionObject: BaseQuestion & {
        selected: string;
        setSelected: React.Dispatch<React.SetStateAction<string>>;
    } = { ...question, selected, setSelected }

    return (
        <div className="flex flex-col gap-6">
            <HeaderText title="Academic Test" />
            <TestInstruction numberOfQuestions={numberOfQuestions} />

            {
                question && (
                    <Question questionObject={questionObject} />
                )
            }

            <div className="flex justify-between">
                {
                    parseInt(id) > 1 && (
                        <WhiteButton onClick={() => navigate(`../test/${parseInt(id) - 1}`)}>Previous Question</WhiteButton>
                    )
                }
                {
                    parseInt(id) < numberOfQuestions && (
                        <MainButton onClick={() => navigate(`../test/${parseInt(id) + 1}`)}>Next Question</MainButton>
                    )
                }
            </div>

        </div>
    )
}

export default AcademicTest