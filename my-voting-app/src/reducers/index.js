const initialState = {
    react: 0,
    angular: 0,
    vue: 0
}

export default (state = initialState, action)  => {
    switch(action.type) {
        case "VOTE_REACT":
            console.log("React");
            return Object.assign({}, state, {
                react:  state.react + 1
            })
        case "VOTE_ANGULAR":
        console.log("Angular");
            return Object.assign({}, state,{
                angular: state.angular + 1
            } )
        case "VOTE_VUE":
        console.log("Vue");
            return Object.assign({}, state, {
                vue: state.vue + 1
            })
        default:
            return state;
    }
}