import { useDispatch, useSelector } from "react-redux";
import {cartActions} from '../store/cart-slice'


export default function ShoppingCarts() {
  const cards = useSelector(state => state.card.cards);
  const dispatch = useDispatch();
  const increment = (cart) => {
    dispatch(
      cartActions.addToCard(cart)
    );
  };
  return (
    <div className="shoppingCards">
      {cards.map((cart) => (
        <div className="shop-cart" key={cart.id}>
          <div className="cart-header">
            <p>{cart.title}</p>
            <div>
              {cart.totalPrice}(${cart.price.toFixed(2)} / item)
            </div>
          </div>
          <h4>X-{cart.quantity}</h4>
          <button className="delete" onClick={() => dispatch(cartActions.removeCard(cart.id))}>
            <b>
              <i>X</i>
            </b>
          </button>
          <div className="calc-btns">
            <button onClick={() => increment(cart)}>Artir</button>
            <button onClick={() => dispatch(cartActions.removeCard(cart.id))}>
              Azalt
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
