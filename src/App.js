import React from "react";
//import logo from './logo.svg';
//import { Button } from 'antd';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.less";
import Albums from "./page/albums";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Albums />
      </Provider>
    </div>
  );
}

export default App;
