import React from 'react';
import { Typography } from '@material-ui/core';

export interface Props {
    variant: "h2" | "h4" | "subtitle1",
    color?: "#fcfcfc" | "black"
    children: string
}

const getTextStyle = (color?: string): any => {
    return {
        color: color ? color : "#fcfcfc",
        display: "inline"
    }
}

const Text = (props: Props) => {
    return (
        <div style={getTextStyle(props.color)}>
            <Typography variant={props.variant}>
                {props.children}
            </Typography>         
        </div>
    )
}

export default Text;
