import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux'

// actions -> increment, decriment
const increment = () => {
  return {
    type: "INCREMENT",
  }
}

const decriment = () => {
  return {
    type: "DECRIMENT",
  }
}

// reducer -> アクションと前の状態を組み合わせて新しい状態にする
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 10
    case "DECRIMENT":
      return state - 10
  }
}

// store
let store = createStore(counterReducer)

// コンソールに新しい状態を表示
store.subscribe(() => console.log(store.getState()))

//dispatch
store.dispatch(increment())
store.dispatch(decriment())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);