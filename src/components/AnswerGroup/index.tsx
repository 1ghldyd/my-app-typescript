import React from "react";
import styled from "styled-components";
import { QUIZZES } from "../../constants";
import { Button } from "components";

interface AnswerGroupProps {
	currentNo: number;
	handleClick: (isCorrect: boolean) => void;
}

const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

const AnswerGroup = ({ currentNo, handleClick }: AnswerGroupProps) => (
    <AnswerGroupWrapper>
        {QUIZZES[currentNo].answers.map((answer) => (
            <Button onClick={() => handleClick(answer.isCorrect)}>{ answer.text }</Button>
        ))}
    </AnswerGroupWrapper>
);
export default AnswerGroup;