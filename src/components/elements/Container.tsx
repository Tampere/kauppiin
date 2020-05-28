import React from 'react';
import { COLORS, BackgroundColorType } from "../../utils/const";

export interface Props {
    backgroundColor?: BackgroundColorType,
    children?: any,
    margin?: any,
    padding?: string,
}

// TODO: useStyle() instead of this

const getStyle = (props: Props): any => {
    return {
        backgroundColor: props.backgroundColor ? props.backgroundColor : "",
        margin: props.margin ? props.margin : "0",
        padding: props.padding ? props.padding : "0 55px 0 55px",
    }
}

const Container = (props: Props) => {
    return (
        <div style={getStyle(props)}>
            {props.children}
        </div>
    );
}

export default Container;