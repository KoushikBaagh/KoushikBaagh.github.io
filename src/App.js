import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import BackgroundLines from "./components/backgroundLines/BackgroundLines";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <BackgroundLines theme={chosenTheme}>
          <div>
            <Main theme={chosenTheme} />
          </div>
        </BackgroundLines>
      </>
    </ThemeProvider>
  );
}

export default App;
