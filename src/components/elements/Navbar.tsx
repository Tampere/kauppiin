import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from "../../utils/const";
import AppBar from '@material-ui/core/AppBar';
import { Space } from "../elements/Space";
import Text from "../elements/Text";
import { Btn } from './Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export interface ButtonProps {
    onClick?: any,
    children?: string,
    variant?: "text" | "contained",
    icon?: any,
    fullWidth?: boolean
}

const useStyles = makeStyles({
  
});

export const Navbar = (props: ButtonProps) => {
    const classes = useStyles(props);

    return (
        <div>  
            <AppBar position="static">
                <Paper style={{ backgroundColor: COLORS.green, padding: "30px"}}>
                    <Btn 
                        onClick={() => alert("moi")} 
                        icon={<ArrowBackIcon /> } />
                        <Space lines={2} />
                    <Text variant="h5" color={COLORS.white} backgroundColor={COLORS.green}>Mihin mennään?</Text>
                </Paper>
            </AppBar>     
            <Space lines={4} backgroundColor={COLORS.green}/>
        </div>
    )
}