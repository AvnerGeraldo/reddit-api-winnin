import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

//Reducer
import reducer from '../reducers'

//Sagas
import rootSaga from '../sagas'

//Create Saga Middleware
const sagaMiddleware = createSagaMiddleware()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
//Store
//const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store