import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { Btn } from '../elements/Button';
import Text from "../elements/Text";
import { Space } from '../elements/Space';
import { ROUTES } from '../../utils/const';
import { directionUrl } from '../../utils/url';

export interface Props {
    routeObj: any,
    data: any
}

interface StringKeyObject {
    [index: string]: object
}

function Navigate(props: Props) {
    const history = useHistory();

    useEffect(() => {
        // TODO: Error handling for earlier steps
        if ((Object.values(props.routeObj).includes(""))){
            history.push(ROUTES.destination);
        }
        else {
            let locationObject = handleLocationObject();
            let dirUrl = directionUrl(locationObject, navigator.platform);
            window.open(dirUrl);
        }
    },[props])

    function handleLocationObject(){
        const entries = Object.entries(props.data);
        let tempObj = Object.assign({}, props.routeObj);

        entries.map((item: any) => {
            let dataObj = props.data[item[0]];     
            let dataKey = props.routeObj[item[0]];
            let locationObj = dataObj[dataKey].location;

            tempObj[item[0]] = locationObj;
        })
        return tempObj;
    }

    return (
        <Grid 
            container 
            justify="center"
            direction="column" 
            alignItems="stretch"
            style={{height: "100vh", textAlign: "center"}}
            >
            <Grid item>
                <Grid container justify="center">
                    <Grid item>
                        <Text variant="h6">
                            Reitti valmis. Navigoidaanko uudestaan? 
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
            <Space lines={3}/>
            <Grid item>
                <Grid container direction="row" justify="space-around" style={{width:"inherit"}}>
                    <Grid item xs={5}>
                        <Btn fullWidth onClick={() => history.push(ROUTES.destination)}>Joo</Btn>
                    </Grid>
                    <Grid item xs={5}>
                        <Btn fullWidth onClick={() => history.push(ROUTES.home)}>Ei</Btn>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navigate;