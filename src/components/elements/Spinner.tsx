import React from 'react';
import { COLORS } from "../../utils/const";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Text from "../elements/Text";

export interface Props {
    loadingText?: string,
}

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        color: COLORS.black,
        padding: "20px"
    }
});

const SpinnerComponent = (props: Props) => {
    const classes = useStyles(props);
    return (
        <div className={classes.root}>
            {
                props.loadingText ?
                    <Text color={COLORS.black} variant="body1">{props.loadingText}</Text>
                    : null
            }
           <CircularProgress size={20} color="inherit" />
        </div>
    )
}

export default SpinnerComponent;
