import {GET_WOMENS_PRODUCT_LOADING,GET_WOMENS_PRODUCT_SUCCESS,GET_WOMENS_PRODUCT_ERROR, GET_MENS_PRODUCT_LOADING, GET_MENS_PRODUCT_SUCCESS, GET_MENS_PRODUCT_ERROR, GET_KIDS_PRODUCT_LOADING, GET_KIDS_PRODUCT_SUCCESS, GET_KIDS_PRODUCT_ERROR} from './actiontypes'



const initialstate={
    womens:[],
    mens:[],
    kids:[],
    loading:false,
    error:false,
}

export const reducer = (state=initialstate,{type,payload}) => {
  switch (type){
    case GET_WOMENS_PRODUCT_LOADING :{
        return {
            ...state,
            loading:true,
        }
    }
    case GET_WOMENS_PRODUCT_SUCCESS :{
        return {
            ...state,
            loading:false,
            womens:payload
        }
    }
    case GET_WOMENS_PRODUCT_ERROR :{
        return {
            ...state,
            loading:false,
            error:true,
        }
    }
    case GET_MENS_PRODUCT_LOADING :{
        return {
            ...state,
            loading:true,
        }
    }
    case GET_MENS_PRODUCT_SUCCESS :{
        return {
            ...state,
            loading:false,
            mens:payload
        }
    }
    case GET_MENS_PRODUCT_ERROR :{
        return {
            ...state,
            loading:false,
            error:true,
        }
    }
    case GET_KIDS_PRODUCT_LOADING :{
        return {
            ...state,
            loading:true,
        }
    }
    case GET_KIDS_PRODUCT_SUCCESS :{
        return {
            ...state,
            loading:false,
            kids:payload
        }
    }
    case GET_KIDS_PRODUCT_ERROR :{
        return {
            ...state,
            loading:false,
            error:true,
        }
    }
    default:{
        return state
    }
  }
}
