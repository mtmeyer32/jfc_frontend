import {
  Badge,
  Drawer,
  Fab,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../actions/cartActions";

const useStyles = makeStyles({
  cartButton: {
    position: "fixed",
    top: "0",
    right: "0",
    transform: "translate(-50%, 50%);",
    "z-index": "6",
  },
});

export const ShoppingCartButton = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state);
  const classes = useStyles();
  const badgeOrigin = { horizontal: "left", vertical: "bottom" };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <span className={classes.cartButton}>
      <Badge
        badgeContent={cartState.cart.items.length}
        anchorOrigin={badgeOrigin}
        overlap="circle"
        color="error"
      >
        <Fab
          size="small"
          color="primary"
          aria-label="cart"
          onClick={() => dispatch(toggleCart(true))}
        >
          <ShoppingCart />
        </Fab>
      </Badge>
      <Drawer
        anchor="right"
        open={cartState.cart.cartOpen}
        onClose={() => dispatch(toggleCart(false))}
      >
        <List>
          {cartState.cart.items.map((item, index) => (
            <ListItem button key={item.name}>
              <ListItemText primary={item.name} />
              <InputLabel id={item.name + index}>QTY</InputLabel>
              <Select
                labelId={item.name + index}
                value={item.qty}
                onChange={handleChange}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>

              </Select>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </span>
  );
};
