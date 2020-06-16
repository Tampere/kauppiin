import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import { useHistory, useParams} from "react-router-dom";
import { ROUTES, DirectionPageList } from '../../utils/const';
import CardComponent from "../elements/Card"
import {IconComponent} from "../elements/Icon";
import { AnyType } from "../../utils/const";

export interface Props {
    handleSelect: any,
    data: any,
    routeObj: any,
    handleCountDistance: any
}

function DirectionView(props: Props ) {
    const [data, setData] = useState<AnyType>({});
    const history = useHistory();
    const {params} = useParams();
    const [pages] = useState(DirectionPageList);
    const [activePage, setPage] = useState(0);

    useEffect(() => {
        let pageIndex = pages.indexOf(params);
        setPage(pageIndex);
        setData(props.data[params]);
    }, [params, history, pages, props])

    function handleNextPage(){
        if (pages.length -1 === activePage) {
            return ROUTES.navigate;
        } else {
            return `${ROUTES.direction}/${pages[activePage + 1]}`;
        }
    }

    function handleClick(e: MouseEvent<HTMLButtonElement>, params: string) {
        if(params !== "current") {
            let locationObj: any = data[e.currentTarget.name].location;
            props.handleSelect(locationObj, params);
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
        let sortMethod: any = params === "parking" ? (a: any, b: any) => a - b : undefined;

        entries.map (
            (item: any, index: number) => {          
                let media: any = params === "current" ? 
                    <IconComponent icon={item[1].image} size="large" /> : 
                    <CardMedia component="img" alt="image" src={item[1].image} />

                if(params === "parking" && item[1].location) { 
                    let distance = props.handleCountDistance(item[1].location);
                    item[1].description = [`Etäisyys kohteeseen noin ${distance}km`]
                    orderingValues.push(distance);
                } else {
                    orderingValues.push(item[1].header);
                }

                tempArr.push ( 
                    <Box key={index} width={1}>
                        <CardComponent 
                            name={item[0]}
                            header={item[1].header}
                            description={item[1].description ? item[1].description  : null}
                            media={media}
                            loading={item === undefined ? true : false}
                            handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e, params)}
                            params={params} />            
                        <Space lines={2} />
                    </Box>
                )
            }
        )

        return sortRenderList(orderingValues, tempArr, sortMethod);              
    }

    if (data === undefined || data === null) return null;
    return (
        <Grid 
            container
            justify="center"
            direction="column" 
            alignItems="center"
            style={{minHeight: "84vh"}}>
                {renderPage()}
        </Grid>
    );
}

export default DirectionView;