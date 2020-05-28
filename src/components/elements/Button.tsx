import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from "../../utils/const";

export interface Props {
    children: string,
    variant: "text" | "contained",
    onClick: any,
    fullWidth?: boolean
}

const useStyles = makeStyles({
    buttonStyle: {
        backgroundColor: (props: Props) => props.variant === "contained" ? COLORS.white : COLORS.green,
        color: (props: Props) => props.variant === "contained" ? COLORS.green : COLORS.white
    }
});

const Btn = (props: Props) => {
    const classes = useStyles(props);

    return (
        <div>  
            <Button 
                className={classes["buttonStyle"]}
                fullWidth={props.fullWidth}
                onClick={props.onClick}
                variant={props.variant}>
                    {props.children}
            </Button>           
        </div>
    )
}

export default Btn;
