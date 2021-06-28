import './App.scss';
import { useState } from 'react';
import Logo from "./components/Logo";
import CartIcon from "./components/CartIcon";
import jsonData from './mattresses.json';
import imageOne from './assets/images/classic-carousel.jpg';
import imageTwo from './assets/images/loom-carousel.jpg';
import imageThree from './assets/images/zen-carousel.jpg';
import star from './assets/images/star.jpg';

function App() {
  // Data
  const mattressData = jsonData.mattresses;
  const mattressTags = Object.keys(mattressData);

  // State
  const [ currentMattress, setCurrentMattress ] = useState(mattressTags[0]);
  const [ cartItemCount, setCartItemCount ] = useState(0);

  // Images
  const mattressImages = {};
  const IMPORTED_IMAGES = [ imageOne, imageTwo, imageThree ];
  mattressTags.forEach((tag, idx) => {
    mattressImages[tag] = IMPORTED_IMAGES[idx];
  });

  // Currency
  let formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Handlers
  const handleChangeMattress = (idx) => {
    setCurrentMattress(mattressTags[idx]);
  }

  const handleAddToCart = () => {
    setCartItemCount(cartItemCount + 1);
  }

  // Logic
  const isMattressActive = (mattressIdx) => {
    return currentMattress === mattressTags[mattressIdx];
  }

  const imageClass = (idx) => {
    return `mattressImage ${isMattressActive(idx) ? "" : "transparent"}`;
  }

  const buttonClass = (idx) => {
    return `selectButton
      ${idx === 1 ? "middleButton" : ""}
      ${isMattressActive(idx) ? "activeButton" : "inactiveButton"}`;
  }

  // Components
  const imageComponents = (() => {
    let images = [];
    for (let idx = 0; idx < 3; idx++) {
      images.push(
        <img
          className={imageClass(idx)}
          src={mattressImages[mattressTags[idx]]}
          alt={mattressData[mattressTags[idx]].name + ' Mattress'}
          key={mattressData[mattressTags[idx]].name}
        />
      );
    }
    return images;
  })();

  const buttonComponents = (() => {
    let buttons = [];
    for (let idx = 0; idx < 3; idx++) {
      buttons.push(
        <button
          className={buttonClass(idx)}
          key={`button${idx}`}
          onClick={() => handleChangeMattress(idx)}>
          {mattressData[mattressTags[idx]].name}
        </button>
      );
    }
    return buttons;
  })();

  const starsImageComponents = (() => {
    let stars = [];
    let idx;
    let rating = mattressData[currentMattress].reviewRating;

    // add full stars to review stars images
    for (idx = 1.0; idx <= rating; idx += 1.0 ) {
      stars.push(<img className='starImg' src={star} alt='full rating star'
                   key={`star${idx}`}/>
                );
    }

    // convert decimal portion of star rating to Integer
    const dec = Math.floor((rating - idx + 1) * 10).toString();

    // convert decimal portion of star rating to Percentage for CSS
    document.documentElement.style.setProperty('--final-star-width', `${dec * 10}%`);

    // add final, partial star to review stars images
    stars.push(<span className="finalStarWrapper" key="star0">
                 <img className='starImg--final' src={star}
                   alt={`0.${dec} partial rating star`} />
               </span>
              );

    return stars;
  })();

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <div className="cartIcon">
          <CartIcon />
          <span className="cartIconCount">{cartItemCount}</span>
        </div>
      </header>
      <main>
        <section className="mattressContent">
          <div className="imageWrapper">
            {imageComponents}
          </div>
          <div className="mattressInterface">
            <h2>Choose Your Mattress</h2>
            <h3>SELECT MATTRESS TYPE</h3>
            <div className="select-buttons">
              {buttonComponents}
            </div>
            <div className="mattressData">
              <span>{mattressData[currentMattress].name + ' Mattress'}</span>
              <span>{formatterUSD.format(mattressData[currentMattress].price)}</span>
            </div>
            <div className="review">
              <span className="reviewStars">{starsImageComponents}</span>
              <span className="reviewNumber">({mattressData[currentMattress].reviewRating.toFixed(1)})</span>
            </div>
            <button className="addButton" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
