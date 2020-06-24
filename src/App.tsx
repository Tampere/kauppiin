import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Navigate from './components/views/NavigationView';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData, CurrentDestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";
import { AnyType, InstructionDataType, calculateDistance } from "./utils/const";
import { getStore, setStore } from "./utils/session";

function App() {
  const [directionData, setDirectionData] = useState<AnyType>({});
  const [instructionPageData, setInstructionData] = useState<InstructionDataType>([{header: "", paragraph: []}]);
  const [initialized, setInit] = useState(false);

  const initialState = {
    routeObj: {parking: {}, destination: {}, current: {}},
    locationAllowed: false, 
    instructionsShown: false,
    useCurrentLocation: false
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchPageData = async () => {
      const pageData = await getPageData();
      setInstructionData(pageData.instructions);
      setDirectionData(pageData.directions);
    };

    fetchPageData();
    handleCheckPermission();
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

  function handleCheckPermission() {
    let sessionState = getStore("state");
    let tempObj = sessionState === null ? initialState : sessionState;
    navigator.permissions.query({name:'geolocation'})
      .then(async function(result) {
        if (result.state === 'granted' ) {
            await handleCurrentLocation(tempObj);
        } 
        else if (result.state === 'denied') {
          tempObj.locationAllowed = false;
          handleSaveState(tempObj);
        }
    }).then(() => setInit(true));
  }

  async function handleCurrentLocation(tempObj: any){
    if (Object.keys(tempObj.routeObj.current).length === 0) {
      getPosition().then((res: any) => {
        tempObj.routeObj.current = {name: "Tämänhetkinen sijainti", lat: res.coords.latitude, lon: res.coords.longitude};
        tempObj.locationAllowed = true;
      }).catch((err) => {
        tempObj.locationAllowed = false;
        console.error(err.message);
      }).then(() => {
        handleSaveState(tempObj);
      })
    } else {
      handleSaveState(true, "locationAllowed");
    }
  }

  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, {enableHighAccuracy: true});
    });
  }

  function handleCountDistance(location: any){
    return calculateDistance(location, state.routeObj.current);
  }

  function handleSaveState(value: any, key?: any, innerKey?: any){
    let sessionState: any = getStore("state");
    if (key && !innerKey) {
      sessionState[key] = value;
    } else if(key && innerKey){
      sessionState[key][innerKey] = value;
    } else {
      sessionState = value;
    }
    setStore("state", sessionState);
    setState(sessionState);
  }
  
  if (!initialized) return null;
  return (
    <div>
      <Router>
          <Navbar />
        <Switch>
            <Container backgroundColor={COLORS.green}>
              <Route path={ROUTES.navigate} render={() => <Navigate state={state}/>} />
              <Route path={`${ROUTES.direction}/:params`} render={() => <DirectionView state={state} handleCountDistance={handleCountDistance} data={directionData} handleSelect={handleSaveState}/>} />
              <Route path={ROUTES.instructions} render={() => <InstructionView seen={state.instructionsShown} handlePageSeen={handleSaveState} data={instructionPageData} />} />
              <Route exact path={ROUTES.home} render={() => <SplashScreen seen={state.instructionsShown} />} />
              {
                !state.instructionsShown ? <Redirect to={ROUTES.home}/> : null
              }
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default (App);
