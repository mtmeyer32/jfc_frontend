import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
//import SwipeableViews from "react-swipeable-views";
import { getItems } from "../actions/inventoryAction";
import { ImageCarousel } from "./ImageCarousel";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  img: {
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
}));

export const StoreCards = () => {
  const dispatch = useDispatch();
  let cardState = useSelector((state) => state);
  //inventory = tutorialSteps;
  const classes = useStyles();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cardState.inventory.map((el) => {
          return (
            <Grid item key={el.name} md={4} sm={6} xs={12}>
              <Card className={classes.card} onClick={() => dispatch(addToCart(el))}>
                <CardContent>
                  <ImageCarousel images={el.images} />
                  <Typography variant="h5" gutterBottom>
                    {el.name}
                  </Typography>
                  <Typography variant="body2">{el.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
