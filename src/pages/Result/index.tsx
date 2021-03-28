import { Container, ResultSection, Button } from "components";
import { QUIZZES } from "../../constants";

interface ResultProps {
	setScore: (value: number) => void;
    score: number;
}

const Result = ({ setScore, score }: ResultProps) => {
    const convertedScore = Math.floor((score / QUIZZES.length) * 100);
    
    return (
        <Container>
            <ResultSection convertedScore={convertedScore}></ResultSection>
            <Button to="/" onClick={ () => setScore(0) }>테스트 다시하기</Button>
        </Container>
    )
};

export default Result;