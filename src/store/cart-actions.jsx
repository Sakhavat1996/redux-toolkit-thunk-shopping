import data from "../data/data";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

// middleware ,
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Pending",
        message: "Mesaj gonderilir..",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-shop-1d7e9-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cards: cart.cards ,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Xeta bas verdi");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Ugurla yekunlasdi...",
        })
      );
    } catch (error) {
      uiActions.showNotification({
        status: "error",
        title: "Error",
        message: "Xeta bas verdi",
      });
    }
    // 1ci yol
    /*
    try {
        dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "Pending",
            message: "Mesaj gonderilir..",
          })
        );

        const response = await fetch(
          "https://redux-shop-1d7e9-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) {
          throw new Error("Xeta bas verdi");
        }

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Ugurla yekunlasdi...",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: 'Xeta bas verdi',
          })
        );
      }
      */
  };
};
// fetch data thunk
export const getData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-shop-1d7e9-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Xeta bas verdi");
      }
      const data = await response.json();
      return data;
    };

    try {
      const resultData = await fetchData();
      dispatch(cartActions.replaceCard(resultData));
    } catch (error) {
      uiActions.showNotification({
        status: "error",
        title: "Error",
        message: "Xeta bas verdi",
      });
    }
  };
};
