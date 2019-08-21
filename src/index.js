import 'babel-polyfill'
//import 'core-js/features/object/assign'
//import 'core-js/features/promise'
//import 'core-js/features/function/name'
//import 'core-js/features/array'//可以更细化，以达到更小，但觉得没必要了

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './style.less'
import './common.less'


ReactDOM.render(<Router />, document.getElementById('root'));

