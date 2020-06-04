import React from 'react';
import { Typography } from '@material-ui/core';
import { COLORS, TextColorType, BackgroundColorType } from "../../utils/const";
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
    variant: "h3" | "h5" | "subtitle1" | "subtitle2",
    color?: TextColorType
    children: string,
    backgroundColor?: BackgroundColorType
}

const useStyles = makeStyles({
    general: {
        backgroundColor: (props: Props) => props.backgroundColor,
        color: (props: Props) => props.color ? props.color : COLORS.white
    }
});

const Text = (props: Props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.general}>
            <Typography variant={props.variant}>
                {props.children}
            </Typography>
        </div>
    )
}

export default Text;
