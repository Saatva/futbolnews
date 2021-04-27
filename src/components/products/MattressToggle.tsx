import { Box, Grid, Theme, Typography, makeStyles } from '@material-ui/core';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectProduct } from 'store/actions/productsActions';
import { AppState } from 'types';

const useStyles = makeStyles((theme: Theme) => ({
  toggleRoot: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  toggleTab: {
    cursor: 'pointer',
    padding: theme.spacing(0.5),
    flexGrow: 1,
    flexBasis: 0,
    textAlign: 'center',
    border: '1px solid #D2D2D2',
    '&:not(:last-child)': {
      borderRight: 'none',
    },
    '&.active': {
      backgroundColor: '#A6A19A',
      '& h6': { color: 'white !important' },
    },
  },
  textSelect: {
    marginTop: theme.spacing(3),
  },
}));

const MattressToggle: FC = () => {
  const classes = useStyles();
  const { list, product: productSelected } = useSelector((state: AppState) => state.products);
  const [id, setId] = useState<string | undefined>(productSelected?.id);
  const dispatch = useDispatch();

  const handleProduct = useCallback((newProductId: string) => {
    setId(newProductId);
  }, []);

  useEffect(() => {
    if (id && productSelected?.id !== id) {
      dispatch(getSelectProduct(id));
    } else if (!id && productSelected?.id) {
      setId(productSelected.id);
    }
  }, [dispatch, id, productSelected?.id]);

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          <Box>Choose Your Mattress</Box>
        </Typography>
        <Typography variant="body2" className={classes.textSelect} gutterBottom>
          <Box fontWeight="fontWeightBold">SELECT MATTRESS TYPE</Box>
        </Typography>
      </Grid>
      <Box className={classes.toggleRoot}>
        {list.map((product) => {
          return (
            <Box
              className={[classes.toggleTab, id === product.id ? 'active' : ''].join(' ')}
              key={`product-select-tab-${product.id}`}
              onClick={() => handleProduct(product.id)}
            >
              <Typography variant="h6">{product.name}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default MattressToggle;
