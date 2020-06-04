import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from "../../utils/const";

export interface ButtonProps {
    onClick: any,
    children?: string,
    variant?: "text" | "contained",
    icon?: any,
    iconButton?: any,
    fullWidth?: boolean
    hidden?: boolean
}

const useStyles = makeStyles({
    root: {
        display: (props: ButtonProps) => props.hidden ? "none" : "block"
    },
    buttonStyle: {
        backgroundColor: (props: ButtonProps) => props.variant === "contained" ? COLORS.white : COLORS.green,
        color: (props: ButtonProps) => props.variant === "contained" ? COLORS.green : COLORS.white
    },
    iconButton: {
        color: (props: ButtonProps) => props.variant === "contained" ? COLORS.green : COLORS.white
    }
});

export const Btn = (props: ButtonProps) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}> 
            {
                props.iconButton ? 
                    <IconButton
                        edge="start"
                        className={classes.iconButton} >
                            {props.iconButton}
                    </IconButton>
                :
                <Button 
                    className={classes.buttonStyle}
                    fullWidth={props.fullWidth}
                    onClick={props.onClick}
                    variant={props.variant ? props.variant : "contained"}
                    endIcon={props.icon}
                    >
                        {props.children}
                </Button>
            }
        </div>
    )
}