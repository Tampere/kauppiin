import React, { MouseEvent } from 'react';
import { Grid, Card, CardActionArea, CardContent} from '@material-ui/core';
import Text from "../elements/Text";
import { COLORS } from "../../styles/styles";
import { makeStyles } from '@material-ui/core/styles';
import SpinnerComponent from "../elements/Spinner";
import { Space } from './Space';

export interface Props {
    header: string,
    name: string,
    handleSelect: any,
    params: string
    description?: string[],
    icon?: any,
    disabled?: boolean,
    loading?: boolean
}

const useStyles = makeStyles({
    root: {
        backgroundColor: (props: Props) => props.disabled ? COLORS.disabled : "",
        color: (props: Props) => props.disabled ? COLORS.textDisabled : "",
        minHeight: "inherit"
    }
});

function CardComponent(props: Props ) {
    const classes = useStyles(props);
    return (
        <Card style={{ backgroundColor: "rgba(253, 251, 249, 0.7)", minHeight: "12vh"}}>
            <CardActionArea className={classes.root} disabled={props.disabled} name={props.name} onClick={(e: MouseEvent<HTMLButtonElement>) => props.handleSelect(e, props.params)}>
                <CardContent style={{margin: 0, padding: 0}}>
                {
                    props.loading ? 
                        <SpinnerComponent />
                        :
                        <Grid container direction="row">
                            <Grid 
                                item 
                                style={{
                                    width: props.icon ? "85%" : "100%",
                                    textAlign: props.icon ? "start" : "center",
                                    padding: "20px 10px 20px 10px"
                                }}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Text variant="body1" disabled={props.disabled} color={COLORS.green} >
                                            {props.header}
                                        </Text>
                                    </Grid>
                                    {
                                        props.description ? 
                                            <Grid item>
                                                {
                                                    props.description.map((item: any, index: number) => 
                                                        <div key={"description" + index}>
                                                            <Text variant="subtitle2" disabled={props.disabled} color="black">
                                                                {item}
                                                            </Text>
                                                            {
                                                                props.description && props.description.length > 1 ?
                                                                    <Space lines={1} />
                                                                : null
                                                            }                                                                                                   
                                                        </div>
                                                    )
                                                }
                                            </Grid> 
                                        : null
                                    }
                                </Grid>  
                            </Grid>
                            {
                                props.icon ?
                                    <Grid item style={{width: "15%"}}>
                                        <Grid container justify="flex-end" style={{height: "100%", width: "100%"}}>
                                            <Grid item style={{ height: "inherit", width: "inherit", maxWidth:"100px"}}>
                                                {props.icon}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                : null
                            }
                        </Grid>
                }
                </CardContent>
            </CardActionArea>
        </Card>    
    );
}

export default CardComponent;