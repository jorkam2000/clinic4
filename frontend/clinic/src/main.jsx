import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import router from './router';
import { RouterProvider } from 'react-router-dom';

import './components/pages/My profile/myProfileEdit';
import profilePage from './components/pages/My profile/myProfileEdit';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {profilePage}
  </React.StrictMode>,
)
