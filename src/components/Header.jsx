import {  useDispatch , useSelector  } from "react-redux";
import {uiActions} from '../store/ui-slice.jsx'

export default function Header() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state=>state.card.totalQuantity);
  return (
    <header>
        <h1>Shopping Card</h1>
        <button onClick={()=>dispatch(uiActions.toggle())}>
            My Card {
              totalQuantity ? <span>{totalQuantity}</span> : undefined
            }
        </button>
    </header>
  );
}