
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constant";
import { useContext } from "react";


const RestaurantCard = (props)=>{

    const{resData} = props;
    console.log(resData) 

    const {loggedInUser} = useContext(UserContext)

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,} = resData?.info;
const{deliveryTime}= resData?.info?.sla;
return(
    <div className="res-card p-2 m-4 w-[250px] h-[410px] rounded-lg bg-gray-100" >

        <img className="res-logo w-[240px] h-[170px] rounded-lg " src={CDN_URL+resData.info.cloudinaryImageId} />


        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4> 
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
       
    
    </div>
      
      
)
};
 
//Higher order component

// input- RestaurantCard => output - RestaurantCardPromoted

 export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return(
        <div>

       
            <label className="ml-7 px-2 mt-3 absolute  bg-gray-300 rounded-md text-black font-semibold">Top Rated</label>
            <RestaurantCard {...props}/>
            </div>
        );
    };};

export default RestaurantCard;
