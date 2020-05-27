import React from 'react';

export interface Props {
    backgroundColor?: "#fcfcfc" | "#62d9b7",
    children?: any
}

const getStyle = (props: Props): any => {
    return {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#fcfcfc",
    }
}

function Container(props: Props) {
    return (
        <div style={getStyle(props)}>
            {props.children}
        </div>
    );
}

export default Container;