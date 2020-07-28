import actions from "../Actions/actions";
import productJson from "../../Assets/products.json"
const userReducer = (state, action) => {
    switch (action.type) {
        case actions.UPDATE_CART:
            let payload = action.payload;
            let newState = state.map((item) => {
                if(item.id === payload.id){
                    return {...item, Cart: payload.cart}
                }else{
                    return item;
                }
            })
            localStorage.setItem("product", JSON.stringify(newState))
            return newState
        case actions.EMPTY_CART:
            localStorage.setItem("product", JSON.stringify(productJson))
            return newState
        default:
            return state
    }
}

export default userReducer;