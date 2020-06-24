import React, {useState, useEffect} from 'react';
import { Toolbar } from '@material-ui/core';
import { COLORS, ROUTES } from "../../utils/const";
import { NavbarContent } from "../../utils/data";
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        padding: "3vh 0vh 3vh 2vh",
        height: "10vh",
        backgroundColor: COLORS.green
    }
});

function getContent(pathname: string){
    return NavbarContent[pathname];
}

export const Navbar = () => {
    const [visible, setVisibility] = useState(false);
    const classes = useStyles();
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
            <div className={classes.root}>
                <Toolbar>
                    <Btn 
                        onClick={handleBack}
                        variant="text"
                        hidden={location.pathname === ROUTES.destination ? true : false}
                        iconButton={<ArrowBackIcon />}/>
                        <Text 
                            variant="h6" 
                            color={COLORS.white} >
                                {getContent(location.pathname)}
                        </Text>
                </Toolbar>
            </div>
        : null
    )
}