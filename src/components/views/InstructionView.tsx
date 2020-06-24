import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";
import DotStepper from '../elements/Stepper';
import { COLORS, ROUTES } from "../../utils/const";
import { Btn } from "../elements/Button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";

export interface Props {
  data: any,
  handlePageSeen: any,
  seen: boolean
}

function InstructionView(props: Props) {
    const [activeStep, nextStep] = useState(0);
    const [steps, setSteps] = useState(0);
    const history = useHistory();

    useEffect(() => {
      if (props.seen) history.replace(ROUTES.destination);
      setSteps(props.data.length);
    }, [history, props]);
  
    const handleNextStep = () => {
        if(activeStep !== steps - 1) {
          nextStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          props.handlePageSeen(true, "instructionsShown");
          history.replace(ROUTES.destination);
        }
      };
      
    const handleSkip = () => {
      props.handlePageSeen(true, "instructionsShown");
      history.replace(ROUTES.destination);
    };

    if (props.data === undefined || props.data === null) return null;

    return ( 
        <Grid 
          container
          justify="center"
          direction="column" 
          alignItems="center"
          style={{height: "100vh"}}>
            <Grid item style={{textAlign:"center", width: "inherit"}}>
              <Text variant="h6">{props.data[activeStep].header}</Text>
              <br />
              {
                props.data[activeStep].paragraph.map((item: any, index: number) => 
                  <div key={index}>
                    <Text key={index} variant="subtitle1">{item}</Text> <br/>
                  </div>
                )
              }

              <DotStepper 
                activeStep={activeStep}
                backgroundColor={COLORS.green}
                steps={steps} 
                position="static"
                nextButton = {
                  <Btn 
                    onClick={handleNextStep} 
                    fullWidth
                    variant="contained"
                    icon={ activeStep < steps -1 ? <ArrowForwardIcon /> : null}>
                          {activeStep < steps - 1 ? "Seuraava" : "Aloitetaan"}
                  </Btn>
                }
                skipButton = {
                  <Btn 
                    onClick={handleSkip}
                    fullWidth
                    variant="text">
                      Ohita
                  </Btn> 
                }
                />
            </Grid>
        </Grid>
    );
}

export default InstructionView;