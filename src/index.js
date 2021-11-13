import React, { Suspense } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './utils/i18n';

ReactDOM.render(
  <Suspense fallback={(<div>Loading~~~</div>)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  
  document.getElementById('root')
);
