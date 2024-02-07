import { useState } from "react";
import React, {lazy, Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { createContext } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
// import Grocery from "./Components/Grocery";
import Cart from "./Components/Cart";

const Grocery = lazy(()=> import("./Components/Grocery"));

const About = lazy(()=>import("./Components/About"));


const AppLayout = ()=>{

    const[userName , setUserName] = useState();

    //authentication

    useEffect(()=>{
// make an api call and send username and password
const data = {
    name:"Ajinkya"
    
}
setUserName(data.name)
    },[]);
  
    return(
        <Provider store={appStore}>
        <UserContext.Provider value=  {{user: userName}}>
   <div className="app">
           <Header/>
           <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
           {
            path:"/",
            element:<Body/>,
           },

            {
                path:"/about",
             element: <Suspense fallback={<h1>We are loading ur page </h1>}> <About/> </Suspense>,
            },
            {
                path:"/contact",
                element:  <Contact/> ,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            }
        ],
        errorElement:<Error/>
    },
    
]);


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
