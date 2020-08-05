import React from 'react';
import { BackgroundColorType, BackgroundStyles } from "../../styles/styles";
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export interface Props {
    backgroundColor?: BackgroundColorType,
    children?: any,
    margin?: any,
    padding?: string,
    split?: any
}

const useStyles = makeStyles({
    root: {
        margin:  "0",
        padding: "0 20px 0 20px",
        minHeight: "100vh"
    }
})

const Container = (props: Props) => {
    const classes = useStyles(props);
    const location = useLocation();
    const style = BackgroundStyles[location.pathname];
    const matches = useMediaQuery('(max-width:1050px)');

    if (matches){
        return (
            <div className={classes.root} style={style}>
                { props.children }
            </div>
        );
    } else {
        return (
            <div className={classes.root} style={style}>
                <div style={{padding: "0px 300px 0px 300px"}}>
                    { props.children }
                </div>
            </div>
        )
    }
}

export default Container;