# Saatva Take Home Submission - Samuel Zhang

## Running Locally
0. Install `yarn` - https://yarnpkg.com/getting-started/install
1. Run `yarn` to install dependencies
2. Run `yarn start` to run code on `localhost:3000` (by default)

## Additional Packages Used (on top of existing CRA packages)
- [ESLint](https://eslint.org/)
- [Redux Toolkit/Slices](https://redux-toolkit.js.org/)
   - Note: this was a bit overkill for the current solution but allows for extendability of global state if needed
- [Sass](https://sass-lang.org)
   - [include-media](https://github.com/eduardoboucas/include-media) - Sass mixins for media breakpoints
- [react-stars](https://github.com/n49/react-stars) - stars component for rating display

## Submission Details/Highlights

### Project (src) Layout
- `api` - contains the mock `mattresses.json` data provided from the original repository, this is where future api layer calls would presumably reside
- `assets` - static assets + logos + product images
- `components` - shared/reusable components
   - `CartIcon` - component for the header's cart icon + badge + dropdown menu
   - `ProductPage` - component for display product information along with radio options + purchase button
   - `ProductRadio` - custom radio input that is tab/arrow key friendly
- `pages` - pages contain the business logic when users interact with the site
   - `MattressPage.tsx` - renders the mattress page + handles purchase logic
- `redux` - contains redux base files along with the product slice

### Remaining To Dos/Potential Extensions
- Accessibility
   - Make the cart dropdown menu accessibility-friendly by adding proper aria labels and adding a focusable object to the menu
   - `ProductRadio` radios are currently navigatable via `Tab` and arrow keys but should add a visual indicator when the radio is focused
- Product Photo Scaling
   - The photo scaling in `ProductPage.scss` is very rough and doesn't work particularly well with different image sizes.
- Testing
   - Additional unit testing is always helpful
- Sass modularily
   - I should have created a Sass mixins/modules file instead of import App.scss in multiple places
   - Similarly, create a Sass module/file for reused colors + theming functionality
- Application Functionality/Reach Goals
   - Add way to clear cart/decrement per-item quantity
   - Make `api` folder actually be dynamic instead of reading from a .json (maybe a mock-server or something)

### Get Creative!
1. A Review Rating display was added underneath the product name/price row. I used the `react-stars` component to quickly set up the stars display.
2. Simple animation was added to the `ProductRadio` radios and `ProductPage` button. I created a reusable mixin in `App.scss` that can be included elsewhere in the app.

### Bonus Items
1. I used sass as the css preprocessor
2. I added a cart menu which can be toggled by clicking the cart icon
3. The "Add to Cart" unit test can be run via `yarn test`. I chose to use `react-testing-library` as it was built into CRA and it was faster to get it set up than using jest/enzyme/something else.

# Prompt

## Mattress Shop Page
Create a single page React application using the screen shot provided (mock.png) as your guide. Please use the data provided in mattresses.json to populate the mattress data in the application.

We recommend using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), but if you roll your own build, please include the node version or an .nvmrc file and any other instructions or dependencies.

### UI
1. The design should match the mock as best as possible.
   * You can use a UI framework (ex. Bootstrap) if preferred, **BUT** you must build at least the mattress selection toggle from scratch.
   * Use a cart icon of your choice.
2. We have only provided the design for the desktop view. You are responsible for deciding how the application will scale to a mobile experience.
3. Use fonts 'Source Serif Pro' for the "Choose Your Mattress" header and 'Questrial' for body copy. These can be found on google fonts website.
### Functionality
1. The user should have the ability to toggle between mattresses.
2. As the mattress selection changes:
   * the selected mattress name and price should be reflected below the mattress toggle.
   * the selected mattress image should be reflected to the left of the configuration area (image files can be found in /images)
3. The "Add to Cart" button should increment the cart item count (in the top right of the view) 
### Get Creative!
The following requirements are loose - this is an opportunity to make the app your own!
1. Display the Review Rating for the selected mattress.
2. Add an animation where you see fit.

### Bonus Items
1. Use a css preprocessor if you prefer sass or less.
2. Add your own flair to the app.
3. Add a unit test for the "Add to Cart" functionality.

### Submission
Please submit a public GITHUB repo url or a bundled file of your work to devhiring@saatvamattress.com.
Please submit a README.md file with your project with instructions on how to get your project up and running and any other miscellaneous items we would need to run.