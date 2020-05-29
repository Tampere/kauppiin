import React from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";

function SplashScreen() {
    return (         
        <Grid 
            container 
            justify="center"
            direction="column" 
            alignItems="center"
            style={{height: "100vh" }}
            >
            <Grid item>
                <Text variant="h3">Kauppiin.fi</Text>
            </Grid>
            <Grid item>
                <Text variant="subtitle1">Kestävän liikkumisen appi</Text> 
            </Grid>
        </Grid>
    );
}

export default SplashScreen;