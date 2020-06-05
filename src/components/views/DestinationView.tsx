import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import Text from "../elements/Text";
import { useHistory } from "react-router-dom";

export interface Props {
    handleClick: any,
    destination: any
}

function DestinationView(props: Props ) {
    const history = useHistory();
    
    return (
        <Grid 
            container
            justify="center"
            direction="column" 
            alignItems="center"
            style={{minHeight: "100vh"}}>
            {
                props.destination !== null ? 
                Object.entries(props.destination).map((item: any, index: number) => (
                    <Box key={index} width={1}>
                        <Card raised>
                            <CardActionArea name={item[0]} onClick={props.handleClick}>
                                <CardContent style={{margin: 0, padding: 0}}>
                                    <Grid container direction="row">
                                        <Grid item style={{width: "70%", padding: "20px 0px 20px 10px"}}>
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Text variant="subtitle1" color="black">
                                                        {item[1].header}
                                                    </Text>
                                                </Grid>

                                                <Grid item>
                                                    <Text variant="subtitle2" color="black">
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

export default DestinationView;