import React, {useState, useEffect} from 'react';
import { Snackbar, Grid } from '@material-ui/core';
import { Btn } from './Button';
import Text from './Text';
import { COLORS } from '../../utils/const';

export interface Props {
    open: boolean,
    message: string,
    action?: any
}

export const Notification = (props: Props) => {
    const [visible, setVisibility] = useState(props.open);

    useEffect(() => {
        setVisibility(props.open);
    }, [props.open])

    function handleSetVisibility(){
        setVisibility(false);
    }

    return (
       <div>
            <Snackbar 
                open={visible} 
                autoHideDuration={props.action ? null : 6000} 
                onClose={handleSetVisibility}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }} 
            >
               <Grid 
                container 
                direction="row" 
                style={{padding: "10px 10px 10px 10px", backgroundColor: COLORS.white, width: "100vw"}}
                alignContent="space-between"
                justify="flex-start"
                
                >
                   <Grid item style={{width: "80%"}}>
                        <Text color={COLORS.black} variant={"caption"}>{props.message}</Text>
                   </Grid>
                   <Grid container justify="center" alignItems="flex-end" style={{width: "20%"}}>
                        <Grid item style={{textAlign: "center"}}>
                                {props.action}
                        </Grid>
                   </Grid>
               </Grid>
            </Snackbar>
       </div>
    )
}