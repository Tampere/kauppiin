import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import { useHistory, useParams} from "react-router-dom";
import { ROUTES, DirectionPageList } from '../../utils/const';
import CardComponent from "../elements/Card"
import {IconComponent} from "../elements/Icon";

export interface Props {
    handleSelect: any,
    handleGetData: any,
    routeObj: any,
    location?: boolean
}

function DirectionView(props: Props ) {
    const [data, setData] = useState({});
    const history = useHistory();
    const {params} = useParams();
    const [pages] = useState(DirectionPageList);
    const [activePage, setPage] = useState(0);

    useEffect(() => {
        let pageIndex = pages.indexOf(params);
        if(props.routeObj[pages[pageIndex - 1]] === ""){
            history.push(ROUTES.destination);
        }
        
        let res = props.handleGetData(params);
        setPage(pageIndex);
        setData(res);
    }, [params, history, pages, props])

    function handleNextPage(){
        if (pages.length -1 === activePage) {
            return ROUTES.navigate;
        } else {
            return `${ROUTES.direction}/${pages[activePage + 1]}`;
        }
    }

    function handleClick(e: MouseEvent<HTMLButtonElement>, params: string) {
        props.handleSelect(e, params);
        let url = handleNextPage();
        history.push(url);
    }

    if (data === undefined || data === null) return null;
    return (
        <Grid 
            container
            justify="center"
            direction="column" 
            alignItems="center"
            style={{minHeight: "84vh"}}>
            {
                Object.entries(data).map (
                    (item: any, index: number) => (
                        <Box key={index} width={1}>
                            {
                                params !== "current" ? 
                                    <CardComponent 
                                        name={item[0]}
                                        header={item[1].header}
                                        description={item[1].description}
                                        media={ <CardMedia component="img" alt="image" src={item[1].image} />}
                                        handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e, params)}
                                        params={params} />
                                    :
                                    <CardComponent 
                                        disabled={!props.location && item[0] === "CURRENT"}
                                        name={item[0]}
                                        header={item[1].header}
                                        media={<IconComponent icon={item[1].image} size="large" />}
                                        handleSelect={(e: MouseEvent<HTMLButtonElement>) => handleClick(e, params)}
                                        params={params} />
                                }
                            <Space lines={2} />
                        </Box>
                    )
                )
            }
        </Grid>
    );
}

export default DirectionView;