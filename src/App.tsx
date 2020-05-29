import React from 'react';
import Container from "./components/elements/Container"
import Instructions from './components/views/Instructions';
import Main from './components/views/Main';
import { COLORS } from "./utils/const";

function App() {
  return (
    <Container backgroundColor={COLORS.green} >
      {/* <Instructions /> */}
      <Main />
    </Container>
  );
}

export default App;
