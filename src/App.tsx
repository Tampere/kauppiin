import React, {useEffect, useState, MouseEvent} from 'react';
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DestinationView from './components/views/DestinationView';
import Main from './components/views/Main';
import { COLORS, DestinationData } from "./utils/const";
import { Navbar } from "./components/elements/Navbar";

function App() {
  const [destination, getDestinations] = useState({});

  useEffect(() => {
      getDestinations(DestinationData);
  }, [destination]);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
      alert(e.currentTarget.name)
  }

  return (
    <div>
      <Navbar />
      <Container backgroundColor={COLORS.green}>
        {/* <InstructionView /> */}
        {/* <Main /> */}
        <DestinationView handleClick={handleClick} destination={destination}/>
      </Container>
    </div>
  );
}

export default App;
