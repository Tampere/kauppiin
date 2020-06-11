import React from 'react';
import { BackgroundColorType } from "../../utils/const";
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
    backgroundColor?: BackgroundColorType,
    children?: any,
    margin?: any,
    padding?: string,
}

const useStyles = makeStyles({
    root: {
        backgroundColor: (props: Props) =>  props.backgroundColor ? props.backgroundColor : "",
        margin:  "0",
        padding: "0 30px 0 30px",
        minHeight: "84vh",
    }
})

const Container = (props: Props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default Container;