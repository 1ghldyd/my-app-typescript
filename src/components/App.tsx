import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from "../pages/Quiz";
import Landing from "../pages/Landing";
import Result from "./Result";


function App() {
  const [score, setScore] = useState<number>(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/quiz">
          <Quiz setScore={ setScore }/>
        </Route>
        <Route path="/result">
          <Result setScore={ setScore } score={ score }/>
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
