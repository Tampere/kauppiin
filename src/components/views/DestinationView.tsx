import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Box, CardMedia } from '@material-ui/core';
import { Space } from "../elements/Space";
import Text from "../elements/Text";

export interface Props {
    handleClick: any,
    destination: any
}
function DestinationView(props: Props ) {
    return (
        <Grid 
            container
            justify="center"
            direction="column" 
            alignItems="center"
            style={{minHeight: "100vh" }}>
            {
                props.destination !== null ? 
                Object.entries(props.destination).map((item: any, index: number) => (              
                    <Box key={index} width={1} >
                        <Card raised>
                            <CardActionArea name={item[0]} onClick={props.handleClick}>
                                <CardContent>
                                    <Grid container direction="row" alignItems="center" >
                                        <Grid item xs={4} style={{textAlign: "center"}}>
                                            <Text variant="subtitle1" color="black">
                                                {item[1].header}
                                            </Text>
                                        </Grid>
                                        <Grid item xs={4} style={{textAlign: "center"}}>
                                            {item[1].description}
                                        </Grid>
                                        <Grid item xs={4} style={{textAlign: "center"}}> 
                                            <CardMedia 
                                                style={{borderRadius: "50%", 
                                                maxWidth: "25%", 
                                                minWidth: "40px", 
                                                marginRight: "30%", 
                                                marginLeft:"30%"}} 
                                                component="img" 
                                                alt="testImage" 
                                                src={item[1].image} />
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