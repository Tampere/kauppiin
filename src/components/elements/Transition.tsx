import React, {useState, useEffect } from 'react';
import { Fade } from '@material-ui/core';

export interface Props {
    type: "fade",
    autoHide?: number,
    timeout: number,
    children: any,
    onExited?: any
}

const Transition = (props: Props) => {
    const [visible, setVisibility] = useState(true);

    useEffect(() => {
        if(props.autoHide !== undefined){
            const timer = setTimeout(() => {
                setVisibility(false);
            }, props.autoHide);
            return () => clearTimeout(timer);
        }
    })

    return (
        <Fade 
            onExited={props.onExited ? props.onExited : null} 
            in={visible} 
            timeout={props.timeout}>
                <div>{props.children}</div>
        </Fade>
       
    )
}

export default Transition;
