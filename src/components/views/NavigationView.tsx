import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { Btn } from '../elements/Button';
import Text from "../elements/Text";
import { Space } from '../elements/Space';
import { ROUTES } from '../../utils/const';
import { directionUrl } from '../../utils/url';
import { IconComponent } from '../elements/Icon';

export interface Props {
    routeObj: any,
    data: any
}

function Navigate(props: Props) {
    const history = useHistory();

    useEffect(() => {
        let dirUrl = directionUrl(props.routeObj, navigator.platform);
        window.open(dirUrl); 
    })

    return (
        <Grid 
            container 
            justify="center"
            direction="column" 
            alignItems="stretch"
            style={{height: "100vh", textAlign: "center"}}
            >
            <Grid item>
                <Grid container justify="center" direction="column">
                    <Grid item>
                        <Text variant="h6">
                            Näytä matkan ensimmäinen osuus:
                        </Text>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row">
                            <Grid item>
                                <Text variant="subtitle1">
                                    moi
                                </Text>
                            </Grid>
                            <Grid item>
                                <IconComponent size="default" icon="arrow_right"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item>
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
                        <Btn variant="contained" fullWidth onClick={() => history.push(ROUTES.destination)}>Joo</Btn>
                    </Grid>
                    <Grid item xs={5}>
                        <Btn variant="contained" fullWidth onClick={() => history.push(ROUTES.home)}>Ei</Btn>
                    </Grid>
                </Grid>
            </Grid> */}
        </Grid>
    );
}

export default Navigate;