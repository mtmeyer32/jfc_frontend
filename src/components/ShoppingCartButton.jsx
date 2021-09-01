import { Badge, Fab, makeStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

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
  let cartState = useSelector((state) => state);
  console.log(cartState);
  const classes = useStyles();
  const badgeOrigin = { horizontal: "left", vertical: "bottom" };
  return (
    <span className={classes.cartButton}>
      <Badge
        badgeContent={cartState.cart.length}
        anchorOrigin={badgeOrigin}
        overlap="circle"
        color="error"
      >
        <Fab size="small" color="primary" aria-label="cart">
          <ShoppingCart />
        </Fab>
      </Badge>
    </span>
  );
};
