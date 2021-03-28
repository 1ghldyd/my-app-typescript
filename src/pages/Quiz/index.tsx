import { useState } from "react";
import { useHistory } from "react-router";
import { Container, AnswerGroup, QuestionSection } from 'components';
import { QUIZZES } from "../../constants";

interface QuizProps {
	setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Quiz = ({ setScore }: QuizProps) => {
    const history = useHistory();
    const [currentNo, setCurrentNo] = useState<number>(0);

    const handleClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore((score) => score + 1);
        }
        // 마지막 퀴즈인지 체크하기
        if (currentNo === QUIZZES.length - 1) {
            history.push('/loading')
        } else {
            setCurrentNo((currentNo) => currentNo + 1);
        }
    };

    return (
        <Container>
            <QuestionSection currentNo={currentNo} />
            <AnswerGroup currentNo={currentNo} handleClick={handleClick} />
        </Container>
    );
};
export default Quiz;