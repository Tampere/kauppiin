import React from 'react';
import { Stepper, Step, StepIconProps, StepLabel } from '@material-ui/core';
import Btn from './Button';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { COLORS } from '../../utils/const';

export interface Props extends ButtonProps {
    activeStep: number,
    steps: number,
    position: "static" | "bottom" | "top",
    backgroundColor?: string
}

export interface ButtonProps {
    fullWidth?: boolean
    nextButtonText: string,
    handleNext: any,
    skipButtonText?: string,
    handleSkip?: any,
}

const useStyles = makeStyles({
    stepper: {
        backgroundColor: (props: Props) => props.backgroundColor ? props.backgroundColor : "",
    }
});


const useStepStyles = makeStyles({
    root: {
      color: COLORS.disabled,
      display: "flex",
      height: 22,
      alignItems: "center"
    },
    active: {
      color: COLORS.white
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor"
    }
  });
  
  function QontoStepIcon(props: StepIconProps) {
    const classes = useStepStyles();
    const { active } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active
        })}
      >
          <div className={classes.circle}></div>
      </div>
    );
  }

function handleGetSteps(props: Props) {
    let tempArray = [];
    for (let i = 0; i < props.steps; i++) {
        tempArray.push(<StepLabel StepIconComponent={QontoStepIcon}/>);
    }
    return tempArray;
}

const DotStepper = (props: Props) => {
    const classes = useStyles(props);
    const steps = handleGetSteps(props);
    return (
        <div>      
            <Stepper className={classes.stepper} activeStep={props.activeStep}>
              {
                  steps.map((item: any, index: number) => 
                    <Step key={index}>{item}</Step>
                  )
              }
            </Stepper>

            <Btn 
                onClick={props.handleNext} 
                fullWidth={props.fullWidth}
                variant="contained">
                    {props.nextButtonText}
            </Btn>
            
            {
                props.skipButtonText !== undefined ? 
                    <Btn 
                        onClick={props.handleSkip}
                        fullWidth={props.fullWidth}
                        variant="text">{props.skipButtonText}
                    </Btn> 
                    : null
            } 

        </div>
    )
}

export default DotStepper;
