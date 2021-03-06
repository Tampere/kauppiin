import React, {useEffect, useState, MouseEvent} from 'react';
import { useHistory } from "react-router-dom";
import { Grid, Link } from '@material-ui/core';
import { Btn } from '../elements/Button';
import { Space } from '../elements/Space';
import { ROUTES, RouteObjType, FeedbackUrl } from '../../utils/const';
import { directionUrl } from '../../utils/url';
import { IconComponent } from '../elements/Icon';
import CardComponent from '../elements/Card';
import Text from '../elements/Text';
import { COLORS } from '../../styles/styles';

export interface Props {
    state: any,
}

type PropType = {
    [index: string]: {name: string, lat: number, lon: number} 
  }

function Navigate(props: Props) {
    const history = useHistory();
    const [routeObj, setRoute] = useState<PropType>();
    const [useCurrentLocation, setUseCurrentLocation] = useState(false);
    const [locationAllowed, setAllowedState] = useState(false);

    useEffect(() => {
        if (Object.keys(props.state.routeObj.destination).length === 0) history.replace(ROUTES.destination);
        else if (Object.keys(props.state.routeObj.parking).length === 0) history.replace(ROUTES.parking);
        setRoute(props.state.routeObj);
        setUseCurrentLocation(props.state.useCurrentLocation);
        setAllowedState(props.state.locationAllowed);
    },[history, props.state])

    function handleClick(e: MouseEvent<HTMLButtonElement>){
        let dirUrl: string = "";
        let tempObj = Object.assign({}, routeObj);
        let route: RouteObjType;
        let travelMode: string;

        if(e.currentTarget.name === "firstRoute") {
            route = {
                start: null,
                end: {lat: tempObj.parking.lat, lon: tempObj.parking.lon}
            }
            travelMode = "car";
        }
        else {
            route = {
                start: {lat: tempObj.parking.lat, lon: tempObj.parking.lon},
                end: {lat: tempObj.destination.lat, lon: tempObj.destination.lon}
            }
            travelMode = "transit";
        }
        dirUrl = directionUrl(route, navigator.platform, travelMode);
        window.open(dirUrl);
    }
       
    if(routeObj === undefined || routeObj === null) return null;

    return (
        <Grid 
            container 
            justify="space-between"
            direction="column" 
            alignItems="stretch"
            style={{padding: "40px 0 0 0", textAlign: "start", minHeight: "68vh"}}
            >

            <Grid item>
                <Text variant="body1" color={COLORS.black}>Avaa karttasovellus osuudelle:</Text>
                <Space lines={2} />
                <Grid container justify="center" direction="column">
                    {
                        useCurrentLocation && locationAllowed ?
                            <Grid item>
                                <CardComponent 
                                    header={`${routeObj.current.name} - ${routeObj.parking.name}` } 
                                    name="firstRoute" 
                                    handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
                                    params={"navigate"}
                                    icon={<IconComponent size="large" icon="drive_eta"/>}
                                /> 
                            </Grid>
                        : null
                    }
                    <Space lines={2} />
                    <Grid item>
                        <CardComponent 
                            header={`${routeObj.parking.name} - ${routeObj.destination.name}` } 
                            name="secondRoute" 
                            handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}
                            params={"navigate"}
                            icon={<IconComponent size="large" icon="directions_bus"/>}
                        /> 
                    </Grid>
                    <Space lines={2} />
                    <Grid item style={{textAlign: "center"}}>
                        <Btn variant="text" onClick={() => history.push(ROUTES.destination)}>Navigoi uudelleen</Btn>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container justify="center" direction="column" style={{padding: "10px 0px 10px 0px"}}>
                    <Grid item style={{textAlign: "center"}}>
                        <Link 
                            underline="always"
                            onClick={() => { 
                                window.open(FeedbackUrl, "_blank")
                            }}>
                            <Text color="#005265" variant="body1">ANNA PALAUTETTA</Text>
                        </Link>
                        <Space lines={1} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navigate;