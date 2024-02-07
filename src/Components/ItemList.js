
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{

const dispatch = useDispatch()

const handleAddItem = (item)=>{
    //when somebody clik on add button we want to dispatch an action
     dispatch(addItem(item)) ;
}



    return (
        <div>
            {items.map((item)=> (
           <div  key={item.card.info.id} 
           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
           >
            
             < div className="w-10/12">
            <div className="py-2" > 
            <span>
        
                {item.card.info.name} 
              
            </span>
     
            <span>
          - ₹
             {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}
            </span>
            
            </div> 

           <p className="text-xs"> {item.card.info.description}</p>
           </div>
           <div className="w-2/12 ml-8">
            <div className="absolute "> 
                <button className=" bg-black text-white font-bold shadow-lg  mx-6 mt-14 w-11 h-6 text-xs rounded-md"  onClick={()=>handleAddItem(item)}>
                Add </button>
            </div>
            <img src={CDN_URL+item.card.info.imageId} className="w-20 h-20 m-1"/>

            
           </div>
           </div>


            ))}
        </div>
    )
     
};
export default ItemList ;