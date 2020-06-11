import React, { MouseEvent } from 'react';
import { Grid, Card, CardActionArea, CardContent} from '@material-ui/core';
import Text from "../elements/Text";

export interface Props {
    header: string,
    name: string,
    handleSelect: any,
    params: string
    description?: string[],
    media?: any,
}

function CardComponent(props: Props ) {
    return (    
        <Card raised>
            <CardActionArea name={props.name} onClick={(e: MouseEvent<HTMLButtonElement>) => props.handleSelect(e, props.params)}>
                <CardContent style={{margin: 0, padding: 0}}>
                    <Grid container direction="row">
                        <Grid 
                            item 
                            style={{
                                width: props.media ? "70%" : "100%",    
                                textAlign: props.media ? "start" : "center",                           
                                padding: "20px 10px 20px 10px"
                            }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Text variant="subtitle1" color="black">
                                        {props.header}
                                    </Text>
                                </Grid>

                                {
                                    
                                props.description ? 
                                    <Grid item>
                                        {
                                            props.description.map((item: any, index: number) => 
                                            <div key={"description" + index}>
                                                    <Text variant="caption" color="black">
                                                        {item}
                                                    </Text>
                                                </div>
                                            )
                                        }
                                    </Grid> 
                                : null
                                }
                            </Grid>  
                        </Grid>
                        {
                            props.media ?
                                <Grid item style={{width: "30%"}}>
                                    <Grid container justify="flex-end" style={{height: "100%", width: "100%"}}>
                                        <Grid item style={{height: "inherit", width: "inherit", maxWidth:"100px"}}>
                                            {props.media}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            : null
                        }
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>    
    );
}

export default CardComponent;