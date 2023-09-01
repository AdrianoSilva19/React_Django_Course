import {PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
     PRODUCT_LIST_FAIL
} from "../constants/productConstants"
import axios from 'axios';


export const listProducts = () => async(dispach) => {
    try{
        dispach({type: PRODUCT_LIST_REQUEST})
        const {data} = await axios.get('/api/products/')
        dispach({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }catch(error){
        dispach({
            type: PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }

} 