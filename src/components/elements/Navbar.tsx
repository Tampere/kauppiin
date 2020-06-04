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
    children: string,
    variant?: "text" | "contained",
    icon?: any,
    fullWidth?: boolean
}

export const Navbar = (props: Props) => {
    return (
        <div>  
            <AppBar position="static">
                <Box bgcolor={COLORS.green} style={{ padding: "10px 30px 20px 30px"}}>
                    <Btn 
                        onClick={() => alert("moi")} 
                        variant="text"
                        iconButton={<ArrowBackIcon />}/>
                        <Text variant="h5" color={COLORS.white} backgroundColor={COLORS.green}>{props.children}</Text>
                </Box>
            </AppBar>     
            <Space lines={3} backgroundColor={COLORS.green}/>
        </div>
    )
}