import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import { NotificationContent } from "../../utils/data";
import { Btn } from "../elements/Button";
import { Notification } from "../elements/Notification";
import DotStepper from '../elements/Stepper';
import Text from "../elements/Text";
import { COLORS } from "../../styles/styles"

export interface Props {
  data: any,
  handlePageSeen: any,
  seen: boolean,
}

function InstructionView(props: Props) {
    const [activeStep, nextStep] = useState(0);
    const [steps, setSteps] = useState(0);
    const [visible, setVisibility] = useState(true);
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
        justify="space-between"
        direction="column" 
        style={{padding: "10vh 0vh 10vh 0vh", height: "100vh"}}>
          <Grid item>
            <Text variant="h4" color={COLORS.green}>{props.data[activeStep].header}</Text>
            <br />
            {
              props.data[activeStep].paragraph.map((item: any, index: number) => 
                <div key={index}>
                  <Text key={index} color={COLORS.black} variant="body1">{item}</Text> <br/>
                </div>
              )
            }
            </Grid>
            <Grid item>
              <DotStepper 
                activeStep={activeStep}
                backgroundColor={"rgba(52, 52, 52, 0)"}
                steps={steps} 
                position="static"
                nextButton = {
                  <Btn 
                    onClick={handleNextStep} 
                    fullWidth
                    variant="contained">
                      {activeStep < steps - 1 ? "Eteenpäin" : "Matkaan"}
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
              <Notification 
                type="normal"
                action={<Btn variant="contained" onClick={() => setVisibility(false)}>Selvä</Btn>} 
                open={visible} 
                message={NotificationContent.Cookies}
                link={<a href="">Evästekäytäntö</a>}
              />
          </Grid>
      </Grid>
    );
}

export default InstructionView;