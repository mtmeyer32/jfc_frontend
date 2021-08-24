import { Fab, makeStyles } from '@material-ui/core'
import { ShoppingCart, Translate } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    cartButton: {
        position: "fixed",
        top: "0",
        right: "0",
        transform: "translate(-50%, 50%);",
        "z-index": "6"
    }
})

export const ShoppingCartButton = () => {
    const classes = useStyles();
    return (
        <Fab className={classes.cartButton} size="small" color="primary" aria-label="cart"><ShoppingCart/></Fab>
    )
}