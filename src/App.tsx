import React, { useState, MouseEvent } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Navigate from './components/views/NavigationView';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData, CurrentDestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

interface StringKeyObject {
  [index: string]: object
}

function App() {
  const [routeObj, setRoute] = useState({parking: "", destination: "", current: ""});
  const [directionData] = useState<StringKeyObject>(() => initPageData());
  const [instructionPageData] = useState(InstructionData);

  function initPageData(){
    return {
      "destination": DestinationData,
      "parking": ParkingData,
      "current": CurrentDestinationData
    }
  }

  function handleGetData(location: string) {
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
              <Route path={ROUTES.navigate} render={() => <Navigate data={directionData} routeObj={routeObj}/>} />
              <Route path={`${ROUTES.direction}/:params`} render={() => <DirectionView handleGetData={handleGetData} handleSelect={handleSelect}/>}/>
              <Route path={ROUTES.instructions} render={() => <InstructionView data={instructionPageData} />} />
              <Route exact path={ROUTES.home} render={() => <SplashScreen />} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default (App);
