import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, changeAuth, incrementAddCard, decrementAddCard, reset } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  console.log(counter)
  const isLogged = useSelector(state => state.isLogged)
  const cartValue = useSelector(state => state.cart)
  console.log(cartValue)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <h1>Cart {cartValue}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <font>{counter}</font>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br></br>
      {!isLogged ? <button onClick={() => dispatch(changeAuth())}>Login</button> : ''}
      {isLogged ? <div><button onClick={() => dispatch(changeAuth())}>Logout</button> <h3>Valuable information I should not see</h3></div> : ''}

      <br></br>
      <button onClick={() => dispatch(incrementAddCard(1))}>+</button>
      <font>{cartValue}</font>
      <button onClick={() => dispatch(decrementAddCard(1))}>-</button>
      <br></br>
      <button onClick={() => dispatch(reset(0, 0))}>Reset</button>
    </div>
  )
}

export default App
