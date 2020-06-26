import React, {useState, useEffect} from 'react';
import { Toolbar, Grid } from '@material-ui/core';
import { COLORS, ROUTES } from "../../utils/const";
import { NavbarContent } from "../../utils/data";
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useLocation } from "react-router-dom";

function getContent(pathname: string){
    return NavbarContent[pathname];
}

export const Navbar = () => {
    const [visible, setVisibility] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes(ROUTES.direction) || location.pathname === ROUTES.navigate) {
            setVisibility(true);
        } else {
            setVisibility(false)
        }
    },[location.pathname])
     
    function handleBack(){
        history.goBack();
    }

    return (
        visible ?
            <Grid 
                container
                justify="center"
                alignItems="flex-start"
                direction="column"
                style={{
                    textAlign:"left", 
                    backgroundColor: COLORS.green, 
                    minHeight: "15vh",
                    padding: "4vh 0 4vh 0"
                }}>
                <Grid item>
                    <Btn 
                        onClick={handleBack}
                        variant="text"
                        hidden={location.pathname === ROUTES.destination ? true : false}
                        iconButton={<ArrowBackIcon />}/>
                </Grid>
                <Grid item>
                    <Text 
                        variant="h4" 
                        color={COLORS.white} >
                            {getContent(location.pathname)}
                    </Text>
                </Grid>
            </Grid>
        : null
    )
}