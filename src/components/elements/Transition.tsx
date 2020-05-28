import React, {useState, useEffect } from 'react';
import { Fade } from '@material-ui/core';

export interface Props {
    type: "slide" | "fade",
    children: any
}

// TODO: Finish this

const Transition = (props: Props) => {
    const [visible, setVisible] = useState(true);

    const handleChange = () => {
        setVisible(false);
      };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleChange();
        }, 4000);
        return () => clearTimeout(timer);
    })

    return (
        props.type === "slide" ? 
        <div>
            {/* <Slide in={visible}></Slide> */}
        </div>
        :   
        <Fade in={visible} timeout={3000}>
            <div>{props.children}</div>
        </Fade>
       
    )
}

export default Transition;
