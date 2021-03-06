import React, { useState } from "react";
import './App.css';

type Quizzes = {
  id: number;
  question: string;
  answers: {
      text: string;
      isCorrect: boolean;
  }[];
}[];

const quizzes: Quizzes = [
  {
    id: 1,
    question: "일론 머스크의 우주 탐사 기업 이름은?",
    answers: [
        { text: "스페이스 엑스", isCorrect: true },
        { text: "테슬라", isCorrect: false },
        { text: "보링 컴퍼니", isCorrect: false },
        { text: "솔라시티", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "일론 머스크의 고향은 어디일까요?",
    answers: [
        { text: "미국 캘리포니아", isCorrect: false },
        { text: "남아프리카 공화국 프리토리아", isCorrect: true },
        { text: "캐나다 벤쿠버", isCorrect: false },
        { text: "호주 시드니", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "일론 머스크가 창업한 페이팔 전신 기업의 이름은?",
    answers: [
        { text: "Zip2 Corporation", isCorrect: false },
        { text: "Alpha Exploration co.", isCorrect: false },
        { text: "X.com", isCorrect: true },
        { text: "Everything CO.", isCorrect: false },
    ],
  }
]

function App() {
  const [currentNo, setCurrentNo] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const convertedScore = Math.floor(score / quizzes.length * 100);
  
  const handleClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score => score + 1);
    };
    if (currentNo === quizzes.length - 1) {
      setShowResult(true);
    } else {
      setCurrentNo(currentNo => currentNo + 1);
    };
  };

  return (
    <div className="container">
      { showResult
      ? <div className="app">
          <h1 className="result-header">당신의 점수는?</h1>
          <p className="result-score">{ convertedScore }</p>
        </div>
      : <div className="app">
          <div className="question-section">
            <h1 className="question-header">
              <span>{ currentNo + 1 }</span>/{ quizzes.length }
            </h1>
            <div className="question-text">
              { quizzes[currentNo].question }
            </div>
          </div>
          <div className="answer-section">
            { quizzes[currentNo].answers.map(answer => <button onClick={() => handleClick(answer.isCorrect)} value={ answer.text }>{ answer.text }</button>) }
          </div>
        </div>
      }
    </div>
  );
}

export default App;
