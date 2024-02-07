import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items) ;


    const dispatch = useDispatch();

    const handleClearCart = ()=>{
       dispatch(clearCart())
    }
    return(
        <div className="text-center m-auto p-auto rounded-md">
            <h1 className="text-xl font-bold pt-2"> Cart</h1>
            <div className="w-6/12 m-auto border">
               
                
              {cartItems.length === 0 && <h1>Cart is empty add items to your cart</h1>}
                <ItemList items = {cartItems}/>
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                
                onClick={handleClearCart}>Clear cart</button>
                
            </div>
        </div>
    )
};

export default Cart ; 