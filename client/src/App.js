import React from 'react';
import AppNavBar from './components/AppNavBar/AppNavBar';
import ShoppingList from './components/ShoppingList/ShoppingList';
import ItemModal from './components/ItemModal/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
