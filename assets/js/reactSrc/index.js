
import React from 'react';
import { render } from 'react-dom';
import ToDoApp from './containers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
var store = createStoreWithMiddleware(rootReducer);

render(<Provider store={store}><ToDoApp /></Provider>, document.getElementById('container'));
