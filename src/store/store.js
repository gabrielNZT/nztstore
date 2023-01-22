import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { catalog } from './Catalog/reducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(catalog, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
