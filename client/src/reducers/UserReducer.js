export const INITIAL_STATE = null;
export const reducer = (state, action) => {
    if (action.type === "USER") {
        // console.log(action)
        return action.payload;
    } else if(action.type === "LOGOUT") {
        return null;
    }
    return state;
}