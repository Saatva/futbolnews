import { Container, Grid, Theme, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import MattressToggle from 'components/products/MattressToggle';
import ProductBody from 'components/products/ProductBody';
import ProductImage from 'components/products/ProductImage';

const useProductStyles = makeStyles((theme: Theme) => ({
  main: {
    marginTop: theme.spacing(4),
  },
}));

const Products: FC = () => {
  const classes = useProductStyles();

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.main}>
        <Grid container spacing={4} direction="row" justify="space-between" alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <ProductImage />
          </Grid>
          <Grid container item xs={12} md={6}>
            <MattressToggle />
            <ProductBody />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Products;
