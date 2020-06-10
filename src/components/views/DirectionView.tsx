import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Card, CardActionArea, CardContent, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import Text from "../elements/Text";
import { useHistory, useParams} from "react-router-dom";
import { ROUTES, DirectionPageList, COLORS } from '../../utils/const';

export interface Props {
    handleSelect: any,
    handleGetData: any}

function DirectionView(props: Props ) {
    const [data, setData] = useState({});
    const history = useHistory();
    const {params} = useParams();
    const [pages] = useState(DirectionPageList);
    const [activePage, setPage] = useState(1);
    
    useEffect(() => {
        let res = props.handleGetData(params);
        setPage(pages.indexOf(params));
        setData(res);
    }, [params, pages, props])

    function handleNextPage(){
        if (pages.length -1 === activePage) {
            return ROUTES.main;
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
            style={{minHeight: "100vh"}}>
            {
                data !== undefined ? 
                Object.entries(data).map((item: any, index: number) => (
                    <Box key={index} width={1}>
                        <Card raised>
                            <CardActionArea name={item[0]} onClick={(e: MouseEvent<HTMLButtonElement>) => handleClick(e, params)}>
                                <CardContent style={{margin: 0, padding: 0}}>
                                    <Grid container direction="row">
                                        <Grid item style={{width: "70%", padding: "20px 10px 20px 10px"}}>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Text variant="subtitle1" color="black">
                                                        {item[1].header}
                                                    </Text>
                                                </Grid>

                                                <Grid item>
                                                    {
                                                        item[1].description.map((item: any, index: number) => 
                                                            <div key={index}>
                                                                <Text variant="caption" color="black">
                                                                    {item}
                                                                </Text>
                                                                <Space lines={1} backgroundColor={COLORS.white}/> 
                                                            </div>
                                                        )
                                                    }
                                                </Grid> 
                                            </Grid>  
                                        </Grid>
                                    <Grid item style={{width: "30%"}}>
                                            <Grid container justify="flex-end">
                                                <Grid item>
                                                    <CardMedia 
                                                        component="img" 
                                                        alt="testImage" 
                                                        src={item[1].image} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Space lines={2} />
                    </Box>
                    ))
                    : null
                }
        </Grid>
    );
}

export default DirectionView;