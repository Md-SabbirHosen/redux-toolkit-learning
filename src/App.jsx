import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotals } from "./feature/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });
  const { isOpen } = useSelector((state) => {
    return state.modal;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
