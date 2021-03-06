import React from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";
import Transition from "../elements/Transition";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import { COLORS } from "../../styles/styles";


function SplashScreen() {
    const history = useHistory();
    
    return (
        <Transition 
            type="fade" 
            timeout={3000} 
            autoHide={3000} 
            onExited={() => history.replace(ROUTES.instructions)}>
            <Grid 
                container 
                justify="center"
                direction="column" 
                alignItems="center"
                style={{height: "100vh" }}
                >
                <Grid item>
                    <Text variant="body1" color={COLORS.black}>Kestävän liikkumisen appi</Text> 
                </Grid>
                <Grid item>
                    <Text variant="h2" color={COLORS.green}>Matkaan</Text>
                </Grid>
            </Grid>
        </Transition>
    );
}

export default SplashScreen;