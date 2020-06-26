import React, {useEffect, useState, MouseEvent} from 'react';
import { useHistory } from "react-router-dom";
import { Grid, CardActionArea, Paper } from '@material-ui/core';
import { Btn } from '../elements/Button';
import Text from "../elements/Text";
import { Space } from '../elements/Space';
import { ROUTES, RouteObjType, COLORS } from '../../utils/const';
import { directionUrl } from '../../utils/url';
import { IconComponent } from '../elements/Icon';

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
            justify="center"
            direction="column" 
            alignItems="stretch"
            style={{padding: "40px 0 0 0", textAlign: "center"}}
            >
            <Grid item>
                <Grid container justify="center" direction="column">
                    {
                        useCurrentLocation && locationAllowed?
                            <CardActionArea name={"firstRoute"} onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>
                                <Grid item>
                                    <Paper style={{backgroundColor: COLORS.white, padding: "5px 0px 5px 0px"}}>                                          
                                        <Grid container direction="row" justify="center">
                                            <Grid item>
                                                <Text color="black" variant="body1"> 
                                                    {routeObj.current.name}
                                                </Text>
                                            </Grid>
                                            <Grid item>
                                                <IconComponent size="default" icon="arrow_right"/>
                                            </Grid>
                                            <Grid item>
                                                <Text color="black"  variant="body1">      
                                                    {routeObj.parking.name}
                                                </Text>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </CardActionArea>
                        : null
                    }
                    <Space lines={2} />
                    <CardActionArea name="secondRoute" onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e)}>
                        <Grid item>
                            <Paper style={{backgroundColor: COLORS.white, padding: "5px 0px 5px 0px"}}>     
                                <Grid container direction="row" justify="center">
                                    <Grid item>
                                        <Text color="black" variant="body1">      
                                            {routeObj.parking.name}
                                        </Text>
                                    </Grid>
                                    <Grid item>
                                        <IconComponent size="default" icon="arrow_right"/>
                                    </Grid>
                                    <Grid item>
                                        <Text color="black" variant="body1">      
                                            {routeObj.destination.name}
                                        </Text>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </CardActionArea>
                    <Space lines={2} />
                    <Btn variant="text" onClick={() => history.push(ROUTES.home)}>Navigoi uudelleen</Btn>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navigate;