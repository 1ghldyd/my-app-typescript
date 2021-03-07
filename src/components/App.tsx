import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { QUIZZES } from "../constants";
import theme from "../theme";
import GlobalStyle from '../globalStyle';
import Container from "./Container";
import AnswerGroup from "./AnswerGroup";
import QuestionSection from "./QuestionSection";
import ResultSection from "./ResultSection";


function App() {
  const [currentNo, setCurrentNo] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const convertedScore = Math.floor(score / QUIZZES.length * 100);
  
  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score => score + 1);
    };
    if (currentNo === QUIZZES.length - 1) {
      setShowResult(true);
    } else {
      setCurrentNo(currentNo => currentNo + 1);
    };
  };

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      { showResult
      ? <Container>
          <ResultSection convertedScore={ convertedScore }/>
        </Container>
      : <Container>
          <QuestionSection currentNo={ currentNo } />
          <AnswerGroup currentNo={ currentNo } handleClick={ handleClick } />
        </Container>
      }
    </ThemeProvider>
  );
}

export default App;
