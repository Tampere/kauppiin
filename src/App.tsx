import React, { useState, MouseEvent, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/elements/Container";
import InstructionView from './components/views/InstructionView';
import DirectionView from './components/views/DirectionView';
import Navigate from './components/views/NavigationView';
import { COLORS, ROUTES } from "./utils/const";
import { InstructionData, DestinationData, ParkingData, CurrentDestinationData} from "./utils/data";
import { Navbar } from "./components/elements/Navbar";
import SplashScreen from "./components/views/SplashScreen";

type DirectionDataType = {
  [index: string]: object 
}

type InstructionDataType =
  { 
    header: string; 
    paragraph: string[]; 
  }[];

function App() {
  const [routeObj, setRoute] = useState({parking: "", destination: "", current: ""});
  const [directionData, setDirectionData] = useState<DirectionDataType>({});
  const [instructionPageData, setInstructionData] = useState<InstructionDataType>([{header: "", paragraph: []}]);
  const [locationAllowed, setStatus] = useState(false);

  useEffect(() => {
    const fetchPageData = async () => {
      const pageData = await getPageData();
      setInstructionData(pageData.instructions);
      setDirectionData(pageData.directions);
    };

    const locationStatus = async () => {
      await handleGetLocationStatus()
        .then((res: any) => { 
          let location = {lat: res.coords.latitude, lon: res.coords.longitude};
          console.log(location)
          setStatus(true);
        })
        .catch(() => setStatus(false));
    } 
    //TODO: Get current location on startup and update it later
    locationStatus();
    fetchPageData();
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

  function handleGetLocationStatus(){
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
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
              <Route path={`${ROUTES.direction}/:params`} render={() => <DirectionView location={locationAllowed} routeObj={routeObj} handleGetData={handleGetData} handleSelect={handleSelect}/>} />
              <Route path={ROUTES.instructions} render={() => <InstructionView data={instructionPageData} />} />
              <Route exact path={ROUTES.home} render={() => <SplashScreen />} />
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default (App);
