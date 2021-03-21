import Container from "../Container";
import ResultSection from "../ResultSection";
import Button from "../Button";
import { Link } from "react-router-dom";
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
            <Link to="/">
                <Button text="테스트 다시하기" onClick={ () => setScore(0) }></Button>
            </Link>
        </Container>
    )
};

export default Result;