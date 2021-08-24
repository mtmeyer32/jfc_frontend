import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const tutorialSteps = [
  {
    images: [
      {
        label: "San Francisco – Oakland Bay Bridge, United States",
        imgPath:
          "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
      },
      {
        label: "Bird",
        imgPath:
          "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    name: "Moon Lamp",
    description: "Realistic 3D printed moon with actual moon surface topology.",
    price: "49.99",
    qty: "12",
    id: "611d0099b65db3ea31874776",
  },
  {
    images: [
      {
        label: "Bali, Indonesia",
        imgPath:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
      },
      {
        label: "NeONBRAND Digital Marketing, Las Vegas, United States",
        imgPath:
          "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
      },
    ],
    name: "Yoda Shelf",
    description: "Walnut book shelf with 3D printed floating baby yoda.",
    price: "134.99",
    qty: "12",
    id: "611d0099b65db3ea31874777",
  },
  {
    images: [
      { label: "Nick", imgPath: "https://www.placecage.com/400/250" },
      { label: "Bill", imgPath: "https://www.fillmurray.com/400/250" },
    ],
    name: "NomadStick",
    description: "Steel stick controller.",
    price: "49.99",
    qty: "12",
    id: "611d0099b65db3ea31874778",
  },
  {
    images: [
      { label: "Place Img", imgPath: "http://placeimg.com/400/250/animals" },
      { label: '"Place Img', imgPath: "http://placeimg.com/400/250/any" },
    ],
    name: "Jewelry Box",
    description: "Custom audio jewelry box.",
    price: "49.99",
    qty: "12",
    id: "611d0099b65db3ea31874779",
  },
];

export const StoreCards = () => {
  const dispatch = useDispatch();
  let inventory = useSelector((state) => state);
  //inventory = tutorialSteps;
  const classes = useStyles();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {inventory.map((el) => {
          return (
            <Grid item key={el.name} md={4} sm={6} xs={12}>
              <Card className={classes.card}>
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
