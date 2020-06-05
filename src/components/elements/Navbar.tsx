import React, {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import { COLORS, ROUTES } from "../../utils/const";
import AppBar from '@material-ui/core/AppBar';
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    box: {
        padding: ROUTES.destination ? "30px 0px 30px 35px" : "20px 0px 30px 35px"
    },
});

function getContent(pathname: string){
   switch (pathname) {
       case ROUTES.destination:
           return "Minne ollaan menossa?";
       case ROUTES.parking:
           return "Pysäköinti"
       default:
           return ""
   }
}

export const Navbar = () => {
    const [visible, setVisibility] = useState(false);
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("directions")) {
            setVisibility(true);
        } else {
            setVisibility(false)
        }
    },[location.pathname])
     
    return (
        <div>  
            {
            visible ? 
                <AppBar position="static">
                    <Box bgcolor={COLORS.green} className={classes.box}>
                        <Btn 
                            onClick={() => alert("moi")}
                            variant="text"
                            hidden={ROUTES.destination ? true : false}
                            iconButton={<ArrowBackIcon />}/>
                            <Text 
                                variant="h5" 
                                color={COLORS.white} 
                                backgroundColor={COLORS.green}>
                                    {getContent(location.pathname)}
                            </Text>
                    </Box>
                </AppBar>
                :
                null
            }
        </div>
    )
}