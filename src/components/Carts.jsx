import data from "../data/data";
import {  useDispatch  } from "react-redux";
import {cartActions} from '../store/cart-slice'

export default function Carts() {
    const dispatch = useDispatch();
    const addCard = (item)=>{
        dispatch(cartActions.addToCard(item))
    }
  return (
    <>
        <div className="all-carts">
            {
                data.map((item)=>(
                    <div className="single-cart" key={item.id}>
                        <div className="cart-header">
                            <p className="cart-title">{item.title}</p>
                            <p className="cart-price">${item.price.toFixed(2)}</p>
                        </div>
                        <p className="cart-desc">{item.desc}</p>
                        <button onClick={()=>addCard(item)}>
                        Add To Card
                        </button>
                    </div>
                ))
            }
        </div>
    </>
  );
}