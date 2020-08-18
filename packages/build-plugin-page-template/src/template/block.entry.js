import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from '@/page';

const mountNode = document.querySelector('#mountNode');
ReactDOM.render(
  <Page />,
  mountNode,
);
