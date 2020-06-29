import React from 'react';
import { COLORS, BackgroundColorType } from "../../styles/styles";

export interface Props {
    lines: 1 | 2 | 3 | 4,
    backgroundColor?: BackgroundColorType
}


export const Space = (props: Props) => {
    return (
        <div 
            style={{
                height: `${props.lines}0px`, 
                backgroundColor: props.backgroundColor ? props.backgroundColor : COLORS.ligthBrown }} />
    )
}