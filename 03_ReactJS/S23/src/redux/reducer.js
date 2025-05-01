const myReducer = (storedata, action) => {
  //write the logic to update store
  //   var newdata;
  if (action.type === "data") {
    // newdata = action.payload;
    storedata = action.payload;
  }
  //   return newdata;
  return storedata;
};

export default myReducer;
