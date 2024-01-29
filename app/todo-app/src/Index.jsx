import React from 'react';
import { createRoot } from 'react-dom/client';
import ToDoApp from './component/ToDoApp';
 
// styling
import './style/index';
 
const root = createRoot(document.getElementById('root'));
root.render(<ToDoApp />);