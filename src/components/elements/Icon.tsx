import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { COLORS } from '../../styles/styles';

export interface Props {
    size: "large" | "default",
    icon: string,
    color?: string
    disabled?: boolean
}

const useStyles = makeStyles({
    root: {
        height: "inherit",
        width: "inherit",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        display: "flex",
        color: (props: Props) => props.disabled ? COLORS.textDisabled : props.color ? props.color : COLORS.green,
    }
});


export const IconComponent = (props: Props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}> 
            <Icon fontSize={props.size}>{props.icon}</Icon>        
        </div>
    )
}