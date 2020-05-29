import React from 'react';
import Container from "./components/elements/Container"
import Instructions from './components/views/Instructions';
import { COLORS } from "./utils/const";

function App() {
  return (
    <Container backgroundColor={COLORS.green} >
      <Instructions />
    </Container>
  );
}

export default App;
