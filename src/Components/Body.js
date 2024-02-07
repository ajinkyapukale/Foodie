
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{

  //local state variable- super powerful variable
const[listOfRestaurants,setListOfRestaurants] = useState([]);
const[filteredRestaurants,setFilteredRestaurants] = useState([]);
const[searchText,setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


useEffect(()=>{
  fetchData();
},[]);

const fetchData = async ()=>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json= await data.json();

console.log(json)

setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks Like You Are Offline...Please check your internet connection</h1>



    return listOfRestaurants.length === 0? <Shimmer/>:(
      <div className="body">
     <div className="flex">
      <div className="search m-4 p-4">
        <input type="text" className="border border-solid border-black" value={searchText} 
        onChange={(e)=>{
       setSearchText(e.target.value);
        }}/>

        <button className="px-4 py-1 bg-blue-200 m-4 rounded-lg" 
        onClick={()=>{
        

          const filteredRestaurant= listOfRestaurants.filter((res)=>(
           res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
          ));
          setFilteredRestaurants(filteredRestaurant);
        }}
        >Search</button>
      </div>

      <div className="flex items-center">
      <button className="px-4 py-1  bg-blue-200 rounded-lg" onClick={()=>{
           
            const filteredList = listOfRestaurants.filter
            ((res)=>res.info.avgRating>4.3);
             setFilteredRestaurants(filteredList);
            
        }}>Top Rated Restaurant</button>
      </div>
       
        </div>     

     <div className="res-container flex flex-wrap">
      {
        filteredRestaurants.map((restaurant) => (
        <Link 
        key = {restaurant.info.id} 
        to={"/restaurants/"+restaurant.info.id}
        >
       
        {restaurant.info.avgRating>4.3 ? 
(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant} />)} </Link>
        ))
      };
         
        </div> 


      </div>  
    )
};
export default Body;