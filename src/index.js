import React from 'react';
import ReactDOM from 'react-dom';
import GlobalApp from './GlobalApp';
import './index.css';
import reportWebVitals from './reportWebVitals';
export const GlobalAppContext = React.createContext({
  state: { movies: [] },
  setState: (newState) => null,
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
