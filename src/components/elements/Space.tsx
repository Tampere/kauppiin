import React from 'react';

export interface Props {
    lines: 1 | 2 | 3 | 4
}


export const Space = (props: Props) => {
    return (
        <div style={{height: `${props.lines}0px`}} />
    )
}