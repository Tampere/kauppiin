import React, {useState, useEffect } from 'react';
import { Fade, Slide } from '@material-ui/core';

export interface Props {
    type: "fade" | "slide",
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
        <div style={{width: "100%"}}>
            {
                props.type === "fade" ?
                    <Fade 
                        onExited={props.onExited ? props.onExited : null} 
                        in={visible} 
                        timeout={props.timeout}>
                            <div>{props.children}</div>
                    </Fade>
                : 
                <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
                    <div>{props.children}</div>
                </Slide>
            }
        </div>  
    )
}

export default Transition;
