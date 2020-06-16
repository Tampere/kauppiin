import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Navigate from './components/views/NavigationView';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData, CurrentDestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";
import Main from "./components/views/Main";
import { AnyType, InstructionDataType, calculateDistance, getStore, setStore } from "./utils/const";

// TODO: Fix navigation page
// TODO: InstructionsShown to instructionPage
// TODO: Redirect direction first page if state is empty

function App() {
  const [directionData, setDirectionData] = useState<AnyType>({});
  const [instructionPageData, setInstructionData] = useState<InstructionDataType>([{header: "", paragraph: []}]);

  const initialState = {
    routeObj: {parking: {}, destination: {}, current: {}},
    locationAllowed: false, 
    instructionsShown: false
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchPageData = async () => {
      const pageData = await getPageData();
      setInstructionData(pageData.instructions);
      setDirectionData(pageData.directions);
    };

    fetchPageData();
    handleSession();
  }, []);

  async function getPageData(){
    const result = {
      instructions: InstructionData,
      directions: {
        destination: DestinationData,
        parking: ParkingData,
        current: CurrentDestinationData
      }
    }

    return result;
  }

  async function handleSession(){
    let state = getStore("state");
    if(state === null){
      await handleCurrentLocation(); 
    } else {
      let stateObj = JSON.parse(state);
      setState(stateObj);
    }
  }

  async function handleCurrentLocation(){
    let currentLocation: any;
    
    getPosition().then((res: any) => {
      currentLocation = {lat: res.coords.latitude, lon: res.coords.longitude};
      initialState.routeObj["current"] = currentLocation;
      initialState.locationAllowed = true;
    }).catch((err) => {
      initialState.locationAllowed = false;
      console.error(err.message);
    }).then(() => {
      setStore("state", initialState);
    })
  }

  const getPosition = function (options?: any) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  function handleCountDistance(location: any){
    return calculateDistance(location, state.routeObj.current);
  }

  function handleSelect(selection: any, params: string) {
      let state: any = getStore("state");
      let tempObj: any = JSON.parse(state);
      tempObj.routeObj[params] = selection;
      setStore("state", tempObj);
  }

  return (
    <div>
      <Router>
          <Navbar />
        <Switch>
          <Container backgroundColor={COLORS.green}>
              <Route path={"/main"} render={() => <Main />} />
              <Route path={ROUTES.navigate} render={() => <Navigate data={directionData} routeObj={state.routeObj}/>} />
              <Route path={`${ROUTES.direction}/:params`} render={() => <DirectionView handleCountDistance={handleCountDistance} routeObj={state.routeObj} data={directionData} handleSelect={handleSelect}/>} />
              <Route path={ROUTES.instructions} render={() => <InstructionView data={instructionPageData} />} />
              <Route exact path={ROUTES.home} render={() => <SplashScreen />} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default (App);
