import { setProducts,setStatus } from "../ProductSlice"
import { STATUS } from '../ProductSlice'
const fetchProductApi = () => {
    return fetchProductThunk = async (dispatch, getState) => {
        dispatch(setStatus(STATUS.LOADING))
        // const propId = getState().id
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json()
            dispatch(setProducts(data))
            dispatch(setStatus(STATUS.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

export default fetchProductApi;