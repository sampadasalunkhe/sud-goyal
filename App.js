import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import HooksContainer from './components/HooksContainer'
import Products from './components/Products'




function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <HooksContainer />
        <Products/>

      </div>
    </Provider>
  )
}

export default App
