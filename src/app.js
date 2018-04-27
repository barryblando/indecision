import React from 'react';
import ReactDOM from 'react-dom';

// HMR
import { hot } from 'react-hot-loader';

// App
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); // render IndecisionApp & its Components & sub Components to REACT DOM
// ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));

export default hot(module)(IndecisionApp);
// module.hot.accept();