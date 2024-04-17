import { useEffect } from "react";
import "./App.css";
import Carts from "./components/Carts";
import Header from "./components/Header";
import ShoppingCarts from "./components/ShoppingCarts";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { getData, sendCartData } from "./store/cart-actions";

let initial = true;

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.ui.isVisible);
  const cart = useSelector((state) => state.card);
  const notification = useSelector((state) => state.ui.notification);
  useEffect(()=>{
    dispatch(getData())
  },[dispatch])

  useEffect(() => {
    // komponent daxilinde action creator
    // const notificationHandle = async () => {
    //   try {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "pending",
    //         title: "Pending",
    //         message: "Mesaj gonderilir..",
    //       })
    //     );

    //     const response = await fetch(
    //       "https://redux-shop-1d7e9-default-rtdb.firebaseio.com/cart.json",
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(cart),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Xeta bas verdi");
    //     }

    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Success",
    //         message: "Ugurla yekunlasdi...",
    //       })
    //     );
    //   } catch (error) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error",
    //         message: 'Xeta bas verdi',
    //       })
    //     );
    //   }
    // };
    // notificationHandle();


    if (initial) {
      initial = false;
      return;
    }
    cart.changed && dispatch(sendCartData(cart))
  }, [cart, dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <div className="container">
        {toggle && <ShoppingCarts />}
        <Carts />
      </div>
    </>
  );
}

export default App;
