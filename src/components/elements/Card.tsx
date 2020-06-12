import React, { MouseEvent } from 'react';
import { Grid, Card, CardActionArea, CardContent} from '@material-ui/core';
import Text from "../elements/Text";
import { COLORS } from "../../utils/const"
import { makeStyles } from '@material-ui/core/styles';

export interface Props {
    header: string,
    name: string,
    handleSelect: any,
    params: string
    description?: string[],
    media?: any,
    disabled?: boolean
}

const useStyles = makeStyles({
    root: {
        backgroundColor: (props: Props) => props.disabled ? COLORS.disabled : "",
        color: (props: Props) => props.disabled ? COLORS.textDisabled : "",
    }
});

function CardComponent(props: Props ) {
    const classes = useStyles(props);
    return (    
        <Card raised>
            <CardActionArea className={classes.root} disabled={props.disabled} name={props.name} onClick={(e: MouseEvent<HTMLButtonElement>) => props.handleSelect(e, props.params)}>
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
                                    <Text variant="subtitle1" disabled={props.disabled} color="black">
                                        {props.header}
                                    </Text>
                                </Grid>

                                {
                                    
                                props.description ? 
                                    <Grid item>
                                        {
                                            props.description.map((item: any, index: number) => 
                                            <div key={"description" + index}>
                                                    <Text variant="caption" disabled={props.disabled} color="black">
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