import React, { FC } from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './routes/Navigation';

export default function App() {


  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
