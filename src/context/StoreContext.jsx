import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const storeContextProvider = (props) => {
  console.log("menu", assets);

  const [cartItems, setCartItems] = useState({});

  const addtoCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
   
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getApi = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        setFooddata(res.data.categories);
        console.log(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   getApi();
  // }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addtoCart,
    removeFromCart,
    getTotalCartAmount
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default storeContextProvider;
