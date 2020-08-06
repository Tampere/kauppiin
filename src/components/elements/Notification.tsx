import React, {useState, useEffect} from 'react';
import { Snackbar } from '@material-ui/core';
import Text from './Text';
import { COLORS } from "../../styles/styles";
import { makeStyles } from '@material-ui/core/styles';
import { Space } from './Space';
import { IconComponent } from './Icon';

export interface Props {
    type: "warning" | "normal"
    open: boolean,
    message: any,
    action?: any,
    icon?: string,
    iconColor?: string
}

const useStyles = makeStyles({
    root: {
        backgroundColor: (props: Props) => props.type === "warning" ? COLORS.warning : COLORS.white,
        color: COLORS.black,
        padding: "30px",
        borderRadius: "4px",
        textAlign: "center",
        width: "100vW"
    }
});


export const Notification = (props: Props) => {
    const [visible, setVisibility] = useState(props.open);
    const classes = useStyles(props);

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
                }} >
                    <span className={classes.root}>
                        {
                            props.icon ?
                                <span>
                                    <IconComponent size="default" icon={props.icon} color={props.iconColor} />
                                    <Space lines={1} />
                                </span>
                                : null
                        }
                        <Text variant="subtitle2" color={COLORS.black}>{props.message}</Text>                     
                        <Space lines={1}/>
                            {props.action}
                    </span>       
                </Snackbar>
       </div>
    )
}