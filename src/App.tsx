import React, {useEffect, useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DestinationView from './components/views/DestinationView';
import Main from './components/views/Main';
import { COLORS, Routes } from "./utils/const";
import { InstructionData, DestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

function App() {
  const [data, setData] = useState(InstructionData);

  useEffect(() => {
     setData(InstructionData)
  }, []);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
      alert(e.currentTarget.name)
  }

  return (
    <div>
      <Router>
        <Navbar /> 
        <Switch>
          <Container backgroundColor={COLORS.green}>
              <Route exact path={Routes.home} render={() => <SplashScreen />} />
              <Route path={Routes.instructions} render={() => <InstructionView data={data} />} />
              <Route path={Routes.destination} render={() => <DestinationView destination={DestinationData} handleClick={handleClick}/>}/>
              <Route path={Routes.parking} render={() => <DestinationView destination={DestinationData} handleClick={handleClick}/>}/>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
