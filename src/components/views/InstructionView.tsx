import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";
import DotStepper from '../elements/Stepper';
import { COLORS } from "../../utils/const";
import SplashScreen from "./SplashScreen";
import Transition from "../elements/Transition";
import { Btn } from "../elements/Button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export interface Props {
  data: any,
  handleNextPage?: any,
  setVisibility?: any,
}

function InstructionView(props: Props) {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState(0);
    const [visible, setVisibility] = useState(true);

    useEffect(() => {
        setSteps(props.data.length)
    }, [props.data.length]);
  
    const handleNext = () => {
        if(activeStep !== 2) {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
          props.handleNextPage();
        }
      };
    
      const handleSkip = () => {
        props.handleNextPage();
      };

    return (
      visible ?
        <Transition 
          type="fade" 
          timeout={3000} 
          autoHide={3000} 
          onExited={() => setVisibility(false)} >
            <SplashScreen /> 
        </Transition>
        :
        <Grid 
          container
          justify="center"
          direction="column" 
          alignItems="center"
          style={{height: "100vh"}}>
            <Grid item style={{textAlign:"center", width: "inherit"}}>
              <Text variant="h5">{props.data[activeStep].header}</Text>
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
                    onClick={handleNext} 
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