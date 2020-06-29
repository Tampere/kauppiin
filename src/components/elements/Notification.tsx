import React, {useState, useEffect} from 'react';
import { Snackbar, Grid } from '@material-ui/core';
import Text from './Text';
import { COLORS } from "../../styles/styles";

export interface Props {
    type: "warning" | "normal"
    open: boolean,
    message: string,
    action?: any,
    link?: any
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
                message={!props.action ? props.message : null}
                action={
                    props.action ? 
                        <Grid 
                            container 
                            spacing={2}
                            style={{ backgroundColor: COLORS.white, padding: 0}}
                            alignContent="center"
                            justify="center"
                        >
                        <Grid item>
                            <Text 
                                color={COLORS.black} 
                                variant={"subtitle2"}>
                                    {props.message}
                                    {props.link ? props.link : null}
                            </Text>
                        </Grid>

                        <Grid item>
                            {props.action}
                        </Grid>
                    </Grid>
                : null
                }
            />
       </div>
    )
}