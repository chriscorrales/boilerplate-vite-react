import React from 'react';
import { createRoot } from 'react-dom/client';

import Counter from './components/Count';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
