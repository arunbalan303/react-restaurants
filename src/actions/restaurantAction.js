import axios from "axios";
import { R_FAIL } from "../constants/restConstants";
import { R_SUCCESS } from "../constants/restConstants";

//create a asynchronous function to api call

export const RestaurentlistAction=()=>async(dispatch)=>{
    try{
  const result = await  axios.get('/restaurants.json')
  console.log(result.data.restaurants);
  dispatch(
    {
        type:R_SUCCESS,
        payload: result.data.restaurants
    }
  )

    }
    catch (error){
        dispatch(
            {
                type:R_FAIL,
                error:error
            }
          )

    }
}