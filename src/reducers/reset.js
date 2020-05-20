const reset = (state = 0, action) => {
    switch (action.type) {
        case 'RESET':

            return state + action.cart

        default:
            return state
    }
}

export default reset