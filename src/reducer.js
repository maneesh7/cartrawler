const reducer = (state, action) => {
  if (action.type === "GET_CAR_DETAILS") {
    return { ...state, cart: [] };
  }

  throw new Error("SOMETING GOES WRONG HERE!!!");
};

export default reducer;
