import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import { useHistory, useParams} from "react-router-dom";
import { ROUTES, DirectionPageList, COLORS } from '../../utils/const';
import CardComponent from "../elements/Card"
import {IconComponent} from "../elements/Icon";
import Icon from '@material-ui/core/Icon';

export interface Props {
    handleSelect: any,
    handleGetData: any}

function DirectionView(props: Props ) {
    const [data, setData] = useState({});
    const history = useHistory();
    const {params} = useParams();
    const [pages] = useState(DirectionPageList);
    const [activePage, setPage] = useState(0);

    useEffect(() => {
        let res = props.handleGetData(params);
        setPage(pages.indexOf(params));
        setData(res);
    }, [params])

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
                                        name={item[0]}
                                        header={item[1].header}
                                        media={<IconComponent icon={index === 0 ? "my_location" : "create"} size="large" />}
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