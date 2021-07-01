import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ReactComponent as ShoppingCartIcon } from '../images/shopping-cart.svg';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  iconButton: {
    padding: '0 0 0 30px',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  icon: {
    height: '1.5rem',
    fill: '#6b6257',
    '&:hover': {
      fill: '#b19780',
    },
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -2,
    top: 3,
    transform: 'scale(0.9) translate(50%, -50%)',
    backgroundColor: '#c19678',
    color: '#fff',
    fontSize: '10px',
  },
}))(Badge);

const CartIcon = () => {
  const classes = useStyles();
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <IconButton disableRipple className={classes.iconButton}>
      <StyledBadge badgeContent={cartCount} showZero>
        <ShoppingCartIcon className={classes.icon} />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIcon;
