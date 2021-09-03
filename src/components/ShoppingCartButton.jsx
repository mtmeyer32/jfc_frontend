import {
  Badge,
  Drawer,
  Fab,
  FormControl,
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
import { toggleCart, updateQty } from "../actions/cartActions";

const useStyles = makeStyles({
  cartButton: {
    position: "fixed",
    top: "0",
    right: "0",
    transform: "translate(-50%, 50%);",
    "z-index": "6",
  },
  paper: {
    width: "25%",
    [`@media (max-width: 400px)`] : {
      width: "80%"
    }
  }
});

export const ShoppingCartButton = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state);
  const classes = useStyles();
  const badgeOrigin = { horizontal: "left", vertical: "bottom" };

  const handleChange = (event) => {
    dispatch(updateQty(event.target.name, event.target.value));
  };

  return (
    <span className={classes.cartButton}>
      <Badge
        badgeContent={Object.keys(cartState.cart.items).length}
        anchorOrigin={badgeOrigin}
        overlap="circular"
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
        classes={{ paper: classes.paper }}
        anchor="right"
        open={cartState.cart.cartOpen}
        onClose={() => dispatch(toggleCart(false))}
      >
        <List>
          {Object.entries(cartState.cart.items).map(([objID, item]) => (
            <ListItem button key={item.name}>
              <ListItemText primary={item.name} secondary={item.description} />
              <FormControl variant="outlined">
                <InputLabel id={objID}>QTY</InputLabel>
                <Select
                  labelId={objID}
                  name={objID}
                  value={item.cartQty}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </span>
  );
};
