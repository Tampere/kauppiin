import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Space } from "../elements/Space";
import { useHistory, useParams} from "react-router-dom";
import { ROUTES, DirectionPageList } from '../../utils/const';
import CardComponent from "../elements/Card"
import {IconComponent} from "../elements/Icon";
import { AnyType } from "../../utils/const";
import { Btn } from '../elements/Button';
import  SpinnerComponent from '../elements/Spinner';
import { Notification } from "../elements/Notification";
import { NotificationContent } from "../../utils/data";

export interface Props {
    handleSelect: any,
    data: any,
    handleCountDistance: any,
    state: any,
}

function DirectionView(props: Props) {
    const [data, setData] = useState<AnyType>({});
    const history = useHistory();
    const {params} = useParams();
    const [pages] = useState(DirectionPageList);
    const [activePage, setPage] = useState(0);
    const [visible] = useState(true);

    useEffect(() => {
        setData(props.data[params]);
        let pageIndex = pages.indexOf(params);
        setPage(pageIndex);
    }, [history, pages, params, props])

    function handleNextPage(){
        if (pages.length -1 === activePage) {
            return ROUTES.navigate;
        } else {
            return `${ROUTES.direction}/${pages[activePage + 1]}`;
        }
    }

    function handleClick(e: MouseEvent<HTMLButtonElement>, params: string) {
        if(params !== "current") {
            let locationData: any = data[e.currentTarget.name].location;
            locationData.name = data[e.currentTarget.name].header;
            props.handleSelect(locationData, "routeObj", params);
        } else {
            handleUseLocation(true);
        }
        let url = handleNextPage();
        history.push(url);
    }

    function sortRenderList(distanceList: any, renderList: any, sortMethod: any){
        let orderedList: any = [];
        const sortedList = distanceList.slice().sort(sortMethod);
        let indexList: any = [];

        for (let i = 0; i < distanceList.length; i++) {
            indexList.push(distanceList.indexOf(sortedList[i]))     
        }

        for (let i = 0; i < indexList.length; i++) {
            orderedList.push(renderList[indexList[i]]);
        }
      
        return orderedList;
    }

    function renderPage(){
        let tempArr: any = [];
        let entries = Object.entries(data);
        let orderingValues: any = [];
        let sortMethod: any = params === "parking" ? (a: any, b: any) => a - b :  (a: any, b: any) => -(a > b) ;

        tempArr = entries.map (
            (item: any, index: number) => {
                if(params === "parking" && item[1].location && props.state.useCurrentLocation) {  
                    let distance = props.handleCountDistance(item[1].location);
                    orderingValues.push(distance);
                    item[1].description[0] = [`Etäisyys kohteeseen noin ${distance}km`];
                } else {
                    orderingValues.push(item[1].header);
                }

                let disabled: boolean = item[0] === "OTHER" ? true : item[0] === "CURRENT" && !props.state.locationAllowed ? true : false;

                return ( 
                    <Box key={index} width={1}>
                        <CardComponent 
                            name={item[0]}
                            header={item[1].header}
                            description={item[1].description ? item[1].description  : null}
                            icon={<IconComponent icon="play_circle_filled" disabled={disabled} size="large"/>}
                            disabled={disabled}
                            handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e, params)}
                            params={params} />            
                        <Space lines={2} />
                    </Box>
                )
            }
        )

        return sortRenderList(orderingValues, tempArr, sortMethod);
    }

    function handleUseLocation(value: any) {
        props.handleSelect(value, "useCurrentLocation");
        let url = handleNextPage();
        history.push(url);
    }

    if ( data === undefined || data === null ) return null;

    if( props.state.loadingLocation && 
        !props.state.locationAllowed && 
        params === "current" && 
        Object.keys(props.state.routeObj.current).length === 0) {
            return <SpinnerComponent />
    }

    return (
        <Grid 
            container
            justify="center"
            direction="column" 
            alignItems="center"
            style={{paddingTop: "40px"}}
            >  
                {renderPage()}
            { 
                params === "current" ? 
                    <Btn 
                        onClick={() => handleUseLocation(false)} 
                        variant="text"
                        >
                            Ohita
                    </Btn> 
                : null
            }
            {
                !props.state.locationAllowed && params === "current" ? 
                    <Notification 
                        type="warning"
                        open={visible} 
                        message={NotificationContent.Location}
                    />
                : null
            }
        </Grid>
    );
}

export default DirectionView;