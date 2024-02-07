import { LOGO_URL } from "../utils/constant";
import { useEffect, useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";




const Header = ()=>{

    // let btnName = "Login";

    const[btnNameReact,setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    
    const {user} = useContext(UserContext);
   
    
    // subscribing to the store using a Selector
     const cartItems = useSelector((store)=> store.cart.items);

   
    
    useEffect(()=>{
       
    },[btnNameReact])
    return(
        <div className="flex justify-between bg bg-pink-100 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-20 p-4 m-4" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢":"🔴" }</li>
                    <li className="px-4 ">  <Link to="/"> Home</Link></li>

                    <li className="px-4">    <Link to="/about"> About Us</Link> </li>
 
                    <li className="px-4"> <Link to="/contact">Contact Us </Link></li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link></li>

                    <li className="px-4 font-semibold text-xl"> <Link to="/cart">Cart 
                     -({cartItems.length} items) </Link></li>
                    <button className="login-btn bg-blue-100 w-14 rounded-md hover:bg-blue-300" onClick={()=>{
                        btnNameReact ==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4">{user}</li>
                </ul>

            </div>

        </div >
    );
};

export default Header;