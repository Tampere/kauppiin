import React from 'react';
import { Typography } from '@material-ui/core';
import { COLORS, TextColorType } from "../../utils/const";

export interface Props {
    variant: "h2" | "h4" | "subtitle1",
    color?: TextColorType
    children: string
}

const getTextStyle = (color?: string): any => {
    return {
        color: color ? color : COLORS.white,
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
