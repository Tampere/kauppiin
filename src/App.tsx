import React, {useEffect, useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, Redirect } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Main from './components/views/Main';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

interface StringKey {
  [index: string]: object;
}

function App() {
  const [routeObj, setRoute] = useState({parking: "", destination: "", current: ""});
  const [directionData] = useState<StringKey>(() => initData());

  function initData() {
     return { 
      "instructions":  InstructionData,
      "destination": DestinationData,
      "parking": ParkingData 
    }
  }

  function getData(location: string) {
      return directionData[location];
  }

  function handleSelect(e: MouseEvent<HTMLButtonElement>, params: string) {
    setRoute({...routeObj, [params]: e.currentTarget.name});
  }

  return (
    <div>
      <Router>
        <Navbar /> 
        <Switch>
          <Container backgroundColor={COLORS.green}>
              <Route exact path={ROUTES.home} render={() => <SplashScreen />} />
              <Route path={ROUTES.instructions} render={() => <InstructionView data={directionData["instructions"]} />} />
              <Route path={`/directions/:params`} render={() => <DirectionView getData={getData} handleClick={handleSelect}/>}/>
              <Route path={"/main"} render={() => <Main />} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
