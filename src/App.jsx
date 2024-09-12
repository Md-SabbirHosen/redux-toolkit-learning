import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./feature/cartSlice";

function App() {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
