import React from 'react';
import { Box } from '@material-ui/core';
import { COLORS } from "../../utils/const";
import AppBar from '@material-ui/core/AppBar';
import { Space } from "../elements/Space";
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export interface Props {
    onClick?: any,
    activePage: any,
    variant?: "text" | "contained",
    icon?: any,
    fullWidth?: boolean
}

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
    return (
        <div>  
            <AppBar position="static">
                <Box bgcolor={COLORS.green} style={{ padding: "10px 30px 20px 30px"}}>
                    {props.activePage === 1 ? <Space lines={1} /> : ""}
                    <Btn 
                        onClick={() => alert("moi")} 
                        variant="text"
                        hidden={props.activePage === 1 ? true : false}
                        iconButton={<ArrowBackIcon />}/>
                        <Text 
                            variant="h5" 
                            color={COLORS.white} 
                            backgroundColor={COLORS.green}>
                                {getContent(props)}
                        </Text>
                </Box>
            </AppBar>
            <Space lines={3} backgroundColor={COLORS.green}/>
        </div>
    )
}