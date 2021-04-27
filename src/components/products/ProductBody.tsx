import { Box, Grid, Theme, Typography, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductAddButton from 'components/products/ProductAddButton';
import { AppState } from 'types';

const useProductBodyStyles = makeStyles((theme: Theme) => ({
  body: {
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(1),
    },
  },
  bodyAmount: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
}));

const ProductBody: FC = () => {
  const classes = useProductBodyStyles();
  const { product } = useSelector((state: AppState) => state.products);
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  const amount = product ? numberFormat.format(product.price) : undefined;

  const productRating = product?.reviewRating || 0.1;

  return (
    <>
      <Grid item container className={classes.body}>
        <Grid item xs={6}>
          {product && (
            <Typography variant="body1">
              <Box fontWeight="fontWeightBold">{product.name} Mattress</Box>
            </Typography>
          )}
        </Grid>
        <Grid item xs={6} className={classes.bodyAmount}>
          <Typography variant="body2">
            <Box textAlign="right">{amount}</Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.body}>
        <Grid item xs={12}>
          <Rating value={productRating} precision={0.1} readOnly size="small" />
        </Grid>
      </Grid>
      {product && <ProductAddButton product={product} />}
    </>
  );
};

export default ProductBody;
