
import { createContext } from "react";

//the contest will describe the data structure
// should not have values or implementation
//its just a promise

const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => { },
    removeProductFromCart: () => { }

});

export default DataContext;