import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { ROUTES } from "../../utils/const";
import { COLORS } from "../../styles/styles";
import { NavbarContent } from "../../utils/data";
import Text from "../elements/Text";
import { Btn } from './Button';
import { useHistory, useLocation } from "react-router-dom";
import {IconComponent } from "../elements/Icon";
import { Space } from './Space';

export interface Props {
    routeObj: any,
    useCurrentLocation: boolean
}

export const Navbar = (props: Props) => {
    const [visible, setVisibility] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes(ROUTES.direction) || location.pathname === ROUTES.navigate) {
            setVisibility(true);
        } else {
            setVisibility(false)
        }
    },[location.pathname])
     
    function handleBack(){
        history.goBack();
    }

    function getContent(pathname: string){
        return NavbarContent[pathname];
    }

    function handleShowSelection() {
        if(props.routeObj.destination.name && props.routeObj.parking.name  && props.useCurrentLocation ){
            return `Menossa liityntäparkin kautta kohteeseen ${props.routeObj.destination.name}`;
        } 
        if (props.routeObj.destination.name){
            return `Menossa kohteeseen ${props.routeObj.destination.name}`;
        }
        else return "";
    }

    return (
        visible ?
            <Grid 
                container
                justify="center"
                alignItems="flex-start"
                direction="column"
                style={{
                    textAlign:"left", 
                    color: COLORS.black, 
                    minHeight: "15vh",
                    padding: "4vh 0 4vh 0"
                }}>
                <Grid item>
                    <Btn 
                        onClick={handleBack}
                        variant="text"
                        hidden={location.pathname === ROUTES.destination ? true : false}
                        iconButton={<IconComponent size="large" icon="arrow_back"/>}/>
                </Grid>
                {
                    props.routeObj.destination.name !== "" ?
                        <Grid item>
                            <Text color={COLORS.black} variant="subtitle2">{handleShowSelection()}</Text>
                        </Grid>
                    : null
                }
                <Space lines={1}/>
                <Grid item>
                    <Text 
                        variant="h4" 
                        color={COLORS.black} 
                        >
                            {getContent(location.pathname)}
                    </Text>
                </Grid>
            </Grid>
        : null
    )
}