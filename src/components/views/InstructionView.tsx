import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";
import DotStepper from '../elements/Stepper';
import { COLORS, Instruction } from "../../utils/const";
import SplashScreen from "./SplashScreen";
import Transition from "../elements/Transition";
import { Btn } from "../elements/Button";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

// TODO: Set Instructions to state

function InstructionView() {
    const [activeStep, setActiveStep] = useState(0);
    const [steps] = useState(Instruction.length);
    const [visible, setVisibility] = useState(true);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleSkip = () => {
        setActiveStep(3);
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
            {
                activeStep !== steps?
                  <Grid item style={{textAlign:"center", width: "inherit"}}>
                    <Text variant="h5">{Instruction[activeStep].header}</Text>
                    <br />
                    {
                      Instruction[activeStep].paragraph.map((item: any, index: number) => 
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
                :
                <p>Done</p>
            }
        </Grid>  
    );
}

export default InstructionView;