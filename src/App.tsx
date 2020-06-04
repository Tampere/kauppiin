import React, {useEffect, useState, MouseEvent} from 'react';
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DestinationView from './components/views/DestinationView';
import Main from './components/views/Main';
import { COLORS } from "./utils/const";
import { InstructionData, DestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";

function App() {
  const [data, getData] = useState({});
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    switch (activePage) {
      case 0:
        getData(InstructionData);
        break;
      case 1:
        getData(DestinationData);
        break;
      default:
        setActivePage(0);
        break;
    }
  }, [activePage]);

  const handleNextPage = () => {
    setActivePage((prevActivePage) => prevActivePage + 1);
  };
 
  const handlePreviousPage = () => {
    setActivePage((prevActivePage) => prevActivePage - 1);
  };

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
      alert(e.currentTarget.name)
  }

  return (
    <div>
      {
        activePage === 0 ?     
          <Container backgroundColor={COLORS.green}>
            <InstructionView data={data} handleNextPage={handleNextPage}/> 
          </Container> 
          : 
          <div>      
            <Navbar activePage={activePage} />
            <Container backgroundColor={COLORS.green}>
              <DestinationView 
                handleClick={handleClick} 
                destination={data}/> 
            </Container> 
          </div>
      }
    
    </div>
  );
}

export default App;
