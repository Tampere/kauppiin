import React, {useEffect, useState} from 'react';
import { Grid } from '@material-ui/core';
import Text from "../elements/Text";
import DotStepper from '../elements/Stepper';
import { COLORS, Instruction } from "../../utils/const";


function Instructions() {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setStepCount] = useState(Instruction.length);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleSkip = () => {
        setActiveStep(3);
      };
    
    return (
        <Grid 
          container
          justify="center"
          direction="column" 
          alignItems="center"
          style={{height: "100vh"}}>
            {
                activeStep !== steps?
                  <Grid item style={{textAlign:"center", width: "inherit"}}>
                    <Text variant="h4">{Instruction[activeStep].header}</Text>
                    <br />
                    {
                      Instruction[activeStep].paragraph.map((item: any, index: number) => 
                        <div>
                          <Text key={index} variant="subtitle1">{item}</Text> <br/>
                        </div>                 
                      )
                    }
                    <DotStepper 
                      activeStep={activeStep}
                      backgroundColor={COLORS.green}
                      steps={steps} 
                      position="static" 
                      handleNext={handleNext}
                      handleSkip={handleSkip}
                      nextButtonText="Seuraava" 
                      skipButtonText="Ohita"
                      fullWidth />
                  </Grid>
                :
                <p>Done</p>
            }
        </Grid>
    );
}

export default Instructions;