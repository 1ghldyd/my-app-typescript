import { Container, ResultSection, Button } from "components";
import { useParams } from "react-router";

interface ResultProps {
	setScore: (value: number) => void;
    convertedScore: number;
}
interface cCodeProps {
    cCode: string;
}

const Result = ({ setScore, convertedScore }: ResultProps) => {
    const { cCode }: cCodeProps = useParams();
    
    return (
        <Container>
            <ResultSection cCode={ cCode }></ResultSection>
            <Button to="/" onClick={ () => setScore(0) }>테스트 다시하기</Button>
        </Container>
    )
};

export default Result;