import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

ReactDOM.render(
  <div>
    <App />
  </div>, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
