import { makeStyles } from '@material-ui/core/styles';

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '0.1rem solid #DBDBDB',
    alignItems: 'center',
    height: theme.spacing(7.5),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(6),
    },
  },
  img: {
    maxWidth: '108px',
    maxHeight: '29px',
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1.5),
      marginLeft: theme.spacing(2),
    },
  },
  cart: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(2),
    },
  },
}));

export default useHeaderStyles;
