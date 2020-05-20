

export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const changeAuth = () => {
  return {
    type: 'LOG_IN'
  }
}
export const incrementAddCard = (num) => {
  return {
    type: 'INCREMENT_ADDCART',
    payload: num
  }
}
export const decrementAddCard = (num) => {
  return {
    type: 'DECREMENT_ADDCART',
    payload: num
  }
}

export const reset = (counter, cart) => {
  return {
    type: 'RESET',
    counter: counter,
    cart: cart
  }
}
