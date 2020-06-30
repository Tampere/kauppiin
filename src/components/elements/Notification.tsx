import React, {useState, useEffect} from 'react';
import { Snackbar, Grid } from '@material-ui/core';
import Text from './Text';
import { COLORS } from "../../styles/styles";
import { Space } from './Space';

export interface Props {
    type: "warning" | "normal"
    open: boolean,
    message: any,
    action?: any
}

const style: any = {
    normal: {
        padding: "5px",
        backgroundColor: COLORS.white,
        color: COLORS.black
    },
    warning: {
        padding: "5px",
        backgroundColor: COLORS.warning,
        color: COLORS.white
    }
};


export const Notification = (props: Props) => {
    const [visible, setVisibility] = useState(props.open);

    useEffect(() => {
        setVisibility(props.open);
    }, [props.open])

    function handleSetVisibility(event: React.SyntheticEvent | React.MouseEvent, reason?: string){
        if (reason === 'clickaway') {
            return;
        }
        setVisibility(false);
    }

    return (
       <div>
            <Snackbar 
                open={visible} 
                autoHideDuration={props.action ? null : 5000} 
                onClose={handleSetVisibility}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }} 
                ContentProps={{style: style[props.type]}}
                message={
                    <Grid container justify="center" alignItems="center" style={{padding: "5px"}}>
                        <Grid item>
                            <Text variant="subtitle2" color={COLORS.black}>{props.message}</Text>
                        </Grid>
                        <Grid item>
                            {props.action}
                        </Grid>
                    </Grid>
                } 
                />
       </div>
    )
}