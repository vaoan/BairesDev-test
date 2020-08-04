import React from 'react';
//import logo from './logo.svg';
//import { Button } from 'antd';
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createHashHistory } from 'history'
import reducers from './redux/reducers'
import sagas from './redux/sagas'
import './App.less';
import Albums from './components/albums';

const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
if (process.env.NODE_ENV === 'development' && true) {
  middlewares.push(logger)
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Albums />
      </Provider>
    </div>
  );
}

export { store, history }
export default App;
