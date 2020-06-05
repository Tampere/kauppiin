import React, {useEffect, useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DestinationView from './components/views/DestinationView';
import Main from './components/views/Main';
import { COLORS } from "./utils/const";
import { InstructionData, DestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

function App() {
  const [data, setData] = useState(InstructionData);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
     setData(InstructionData)
  }, []);


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
      <Router>
        <Navbar activePage={activePage}/> 
        <Switch>
            <Container backgroundColor={COLORS.green}>
                <Route exact path="/" render={() => <SplashScreen />} />
                <Route path="/instructions" render={() => <InstructionView data={data} handleNextPage={handleNextPage}/>} />
                <Route path="/directions/destination" render={() => <DestinationView destination={DestinationData} handleClick={handleClick}/>}/>
                <Route path="/directions/parking" render={() => <DestinationView destination={DestinationData} handleClick={handleClick}/>}/>
                <Redirect from="/directions" to="/directions/destination" />
            </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
