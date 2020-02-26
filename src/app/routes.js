import React from 'react';
import TestView from '../app/views/TestView';

const routes = [
  {
    path: '',
    action: () => <TestView />,
  },
  {
    path: '/test/:id',
    action: () => <TestView />,
  }
];

export default routes;