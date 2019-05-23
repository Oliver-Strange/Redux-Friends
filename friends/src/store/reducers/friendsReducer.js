import {FETCH_DATA_START, FETCH_DATA_SUCCESS} from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [{
        id:'',
        name:'',
        age:'',
        email:''
    }],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload.friends
            };
        default:
            return state;
    }
};

export default friendsReducer;