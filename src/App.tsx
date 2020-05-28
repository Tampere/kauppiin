import React from 'react';
import Container from "./components/elements/Container"
import SplashScreen from "./components/views/SplashScreen";
import Instructions from './components/views/Instructions';
import { COLORS } from "./utils/const";

// TODO: Stepper swipe
// TODO: Transition


function App() {
  return (
    <Container backgroundColor={COLORS.green} >
      {/* <SplashScreen /> */}
      <Instructions />
    </Container>
  );
}

export default App;
