const changeCart = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_ADDCART':
            return state + action.payload
        case 'DECREMENT_ADDCART':
            return state - action.payload
        case 'RESET':
            return state - state + action.cart
        default:
            return state
    }
}

export default changeCart