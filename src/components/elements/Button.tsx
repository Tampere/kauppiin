import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from "../../utils/const";

export interface ButtonProps {
    onClick: any,
    children?: string,
    variant?: "text" | "contained",
    icon?: any,
    fullWidth?: boolean
}

const useStyles = makeStyles({
    buttonStyle: {
        backgroundColor: (props: ButtonProps) => props.variant === "contained" ? COLORS.white : COLORS.green,
        color: (props: ButtonProps) => props.variant === "contained" ? COLORS.green : COLORS.white
    }
});

export const Btn = (props: ButtonProps) => {
    const classes = useStyles(props);

    return (
        <div>  
            <Button 
                className={classes["buttonStyle"]}
                fullWidth={props.fullWidth}
                onClick={props.onClick}
                variant={props.variant ? props.variant : "contained"}
                endIcon={props.icon}
                >
                    {props.children}
            </Button>           
        </div>
    )
}