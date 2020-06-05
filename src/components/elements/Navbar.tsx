import React from 'react';
import { Box } from '@material-ui/core';
import { COLORS } from "../../utils/const";
import AppBar from '@material-ui/core/AppBar';
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
    onClick?: any,
    activePage: any,
    variant?: "text" | "contained",
    icon?: any,
    fullWidth?: boolean
}

const useStyles = makeStyles({
    box: {
        padding: (props: Props) => props.activePage === 0 ? "30px 0px 30px 35px" : "20px 0px 30px 35px"
    },
});

function getContent(props: Props){
   switch (props.activePage) {
       case 1:
           return "Minne ollaan menossa?";
       case 2:
           return "Pysäköinti"
       default:
           return "moi"
   }
}

export const Navbar = (props: Props) => {
    const classes = useStyles(props);
 
    return (
        <div>  
            <AppBar position="static">
                <Box bgcolor={COLORS.green} className={classes.box}>      
                    <Btn 
                        onClick={() => alert("moi")} 
                        variant="text"
                        hidden={props.activePage === 0 ? true : false}
                        iconButton={<ArrowBackIcon />}/>
                        <Text 
                            variant="h5" 
                            color={COLORS.white} 
                            backgroundColor={COLORS.green}>
                                {getContent(props)}
                        </Text>
                </Box>
            </AppBar>
        </div>
    )
}