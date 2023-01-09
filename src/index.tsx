import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Counter from './components/Counter';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
