// import React from 'react'

import { useNavigate, useParams } from "react-router-dom"
import HeaderText from "../../components/HeaderText"
import { handleSelect, Questions } from "../../service"
import TestInstruction from "../../components/TestInstruction"
import Question from "../../components/Question"
import { useState } from "react"
import type { BaseQuestion } from "../../../../utils/types/baseTypes"
import MainButton from "../../../../components/ui/MainButton"

const numberOfQuestions = Questions.length

const AcademicTest = () => {
    const { id } = useParams<{ id: string }>()
    const idInt = parseInt(id ?? "")
    const navigate = useNavigate()

    const [answers, setAnswers] = useState<Record<number, string>>({});
    let question = Questions.find((question) => question.index === idInt)

    if (!id) { return <div>Question not found</div> }

    if (!question) { return <div>Question not found</div> }

    const questionObject: BaseQuestion & {
        selected: string;
        setSelected: (value: string) => void;
    } = { ...question, selected: answers[question.index] ?? "", setSelected: (value: string) => handleSelect(question.index, value, setAnswers) }

    return (
        <div className="flex flex-col gap-6">
            <HeaderText title="Academic Test" />
            <TestInstruction numberOfQuestions={numberOfQuestions}>From the multiple choice questions, you are to choose answer between option A - D</TestInstruction>

            {
                question && (
                    <Question questionObject={questionObject} />
                )
            }

            <div className="flex justify-between">
                {
                    idInt > 1 && (
                        <div className="mr-auto">
                            <MainButton white fit onClick={() => navigate(`../academictest/${parseInt(id) - 1}`)}>Previous Question</MainButton>
                        </div>
                    )
                }
                {
                    idInt < numberOfQuestions && (
                        <div className="ml-auto">
                            <MainButton onClick={() => navigate(`../academictest/${parseInt(id) + 1}`)}>Next Question</MainButton>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default AcademicTest