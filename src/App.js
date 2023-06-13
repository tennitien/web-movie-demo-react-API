import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';

import Browse, { loader } from './pages/browse/Browse';
import Search from './pages/search/Search';

const router = createBrowserRouter([
  { path: '/', element: <Browse />, loader: loader },
  { path: '/search', element: <Search /> },
]);
////
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
