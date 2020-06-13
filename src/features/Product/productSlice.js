const { createSlice } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    initProducts: (state, action) => {
      return action.payload;
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },
    updateProduct: (state, action) => {
      let index = state.findIndex((x) => x.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

const { actions, reducer } = productSlice;
export const {
  addProduct,
  initProducts,
  removeProduct,
  updateProduct,
} = actions;
export default reducer;
