import { GETALBUM, DELETEDATASUCESS, GETDATASUCESS} from "./ActionType";


const initialState = {
    user:[],
    posts:[],
    album:[],
    error: null
}

export const postsReducer = (state = initialState, action) => {
    console.log(action.payload)

    switch(action.type){
        case GETDATASUCESS:
            return{
                ...state, 
                posts: action.payload
            }
        case DELETEDATASUCESS:
                return{
                    ...state, 
                    posts: [...state.posts.filter(posts => posts.id !== action.payload)]
                }
        default:
            return{
                state
            }
    }
}

export const albumReducer = (state = initialState, action) => {
    console.log(action.payload)

    switch(action.type){
        case GETALBUM:
            return{
                ...state,
                album: action.payload
            }
        default:
            return{
                state
            }
    }
}