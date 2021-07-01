export const LOAD_MATTRESSES = 'LOAD_MATTRESSES';
const LOAD_MATTRESSES_SUCCESS = 'LOAD_MATTRESSES_SUCCESS';

export const loadMattresses = () => ({
  type: LOAD_MATTRESSES,
});

export const loadMattressesSuccess = (mattresses) => ({
  type: LOAD_MATTRESSES_SUCCESS,
  payload: mattresses,
});

const initialState = {};

const mattressesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MATTRESSES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

export default mattressesReducer;
