import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './App';


const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ];
    case 'SET_PLANT_LIST':
      return action.payload;
    default:
      return state;
  }
};

function* fetchPlants() {
  try {
    const plants = yield axios.get('/api/plant');
    yield put({ type: 'SET_PLANT_LIST', payload: plants.data })
  } catch (error) {
    console.log(`Error in fetchPlants: ${error}`);
    alert('Something went wrong!');
  }
}

function* postPlant(action) {
  try {
    yield axios.post('/api/plant', action.payload);
    yield put({ type: 'FETCH_PLANT_LIST' });
  } catch (error) {
    console.log(`error in PostPlant ${error}`);
    alert('Something went wrong');
  }
}

function* deletePlant(action) {
  try {
    yield axios.delete(`/api/plant/${action.payload}`)
    yield put({ type: 'FETCH_PLANT_LIST' });
  } catch (error) {
    console.log(`error in deletePlant ${error}`);
    alert('Something went wrong.');
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_PLANT_LIST', fetchPlants);
  yield takeEvery('ADD_PLANT', postPlant);
  yield takeEvery('DELETE_PLANT', deletePlant);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);