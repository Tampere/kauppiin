import React, { useEffect, useState, MouseEvent } from 'react';
import { Grid, Card, CardActionArea, CardContent, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import Text from "../elements/Text";
import { useHistory, useLocation, useParams } from "react-router-dom";

export interface Props {
    handleClick: any,
    getData: any
}

function DirectionView(props: Props ) {
    const [data, setData] = useState({});
    const [activePage, setPage] = useState();
    const history = useHistory();
    const location = useLocation();
    const {params} = useParams();

    useEffect(() => {
        let res = props.getData(params);
        setData(res);
    }, [params])


    function handleSelect(e: MouseEvent<HTMLButtonElement>, params: string) {
        props.handleClick(e, params);
        history.push(`/directions/parking`)
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
                            <CardActionArea name={item[0]} onClick={(e: MouseEvent<HTMLButtonElement>) => handleSelect(e, params)}>
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
                                                    <Text variant="caption" color="black">
                                                        {item[1].description}
                                                    </Text>
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