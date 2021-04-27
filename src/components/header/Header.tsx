import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import useHeaderStyles from './HeaderStyles';
import { AppState } from 'types';

const Header: FC = () => {
  const classes = useHeaderStyles();
  const additions = useSelector((state: AppState) => state.cart.additions);

  return (
    <header className={classes.header}>
      <img className={classes.img} alt="logo" src={`${process.env.PUBLIC_URL}/images/saatva-logo.jpg`} />
      <div className={classes.cart}>
        <Badge badgeContent={additions.length} color="primary">
          <ShoppingCartOutlinedIcon color="secondary" />
        </Badge>
      </div>
    </header>
  );
};

export default Header;
