import React, { useState, MouseEvent} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Main from './components/views/Main';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

interface StringKeyObject {
  [index: string]: object
}

function App() {
  const [routeObj, setRoute] = useState({parking: "", destination: "", current: ""});
  const [data] = useState<StringKeyObject>(() => initPageData());

  function initPageData(){
    return {
      "instructions": InstructionData,
      "destination": DestinationData,
      "parking": ParkingData 
    }
  }

  function handleGetData(location: string) {
      return data[location];
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
              <Route path={"/main"} render={() => <Main />} />
              <Route path={`${ROUTES.direction}/:params`} render={() => <DirectionView handleGetData={handleGetData} handleSelect={handleSelect}/>}/>
              <Route path={ROUTES.instructions} render={() => <InstructionView data={data["instructions"]} />} />
              <Route exact path={ROUTES.home} render={() => <SplashScreen />} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default (App);
