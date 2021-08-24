import { Button, Container, makeStyles, useTheme } from "@material-ui/core";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  img: {
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  leftButton: {
    position: "absolute",
    top: "50%",
    left: "0%",
    transform: "translate(50%, -50%)",
  },
  rightButton: {
    position: "absolute",
    top: "50%",
    right: "0%",
    transform: "translate(-50%, -50%)",
  },
  buttonContainer: {
    position: "relative",
  },
}));

export const ImageCarousel = ({ images }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container className={classes.buttonContainer}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Button
        className={classes.leftButton}
        size="small"
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRightIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </Button>
      <Button
        className={classes.rightButton}
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeftIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )}
      </Button>
    </Container>
  );
};
