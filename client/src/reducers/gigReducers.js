import {store} from "../store/store"

export const INIIIAL_STATE = {
    usersId : store.getState().user.user._id,
    title : "",
    cat : "",
    cover : "",
    images : "",
    desc : "",
    shortTitle : "",
    shortDesc : "",
    deliveryTime : 0,
    revisionNumber : 0,
    features : [],
    price : 0
}

export const gigReducers = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state, [action.payload.name] : action.payload.value
            };

        case "ADD_FEATURES" : 
            return {
                ...state, features : [...state.features, action.payload] 
            };
        
        case "ADD_IMAGES": 
            return {
                ...state, 
                cover : action.payload.cover,
                images : action.payload.images
            };

        case "REMOVER_FEATURES" : 
            return {
                ...state, features : state.features.filter(feature => feature !== action.payload)
            };
        default:
            break;
    }
}

