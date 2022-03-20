const initialState = {
    data: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'Add Favourite'){
        newState.data = state.data.concat(action.newItem);
    }

    return newState;
}

export default reducer;