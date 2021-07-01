import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as SaatvaLogo } from '../images/saatva-logo.svg';
import CartIcon from './CartIcon';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e3e3e3',
  },
  toolbar: {
    margin: '0 5rem',
    alignItems: 'center',
    minHeight: '4rem',
  },
  link: {
    flexGrow: 1,
    lineHeight: 1,
  },
  logo: {
    height: '1.4rem',
    fill: '#c19678',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar disableGutters className={classes.toolbar}>
        <a href="/" className={classes.link}>
          <SaatvaLogo className={classes.logo} />
        </a>
        <CartIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
