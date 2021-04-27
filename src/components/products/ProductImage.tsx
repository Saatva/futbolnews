import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'types';

const useProductImageStyles = makeStyles((theme: Theme) => ({
  imgRoot: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
  },
  imageWrapper: {
    padding: 0,
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    overflow: 'hidden',
  },
  imagePositioner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
}));

const ProductImage: FC = () => {
  const classes = useProductImageStyles();
  const { product } = useSelector((state: AppState) => state.products);

  return (
    <div className={classes.imgRoot}>
      <div className={classes.imageWrapper}>
        <div className={classes.imagePositioner}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${product?.imageFileName || 'saatva-logo_default.png'}`}
            alt="Preview"
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
