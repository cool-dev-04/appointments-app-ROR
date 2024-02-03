import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

document.addEventListener('turbo:load', () => {
  const root = ReactDOM.createRoot(document.body.appendChild(document.createElement('div')));

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});
