import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from '../Portfolio/Pages/cmbc';
import Work from '../Portfolio/navbar';
import Roufce from '../Portfolio/Pages/office';

const Page = () => {
  return (
    <BrowserRouter>
    {/* <Work /> Render the Work component outside Routes */}
      <Routes>
        <Route path='/' element={<Work />} >
          <Route path="/display" element={<Display />} />
          <Route path="/roufce" element={<Roufce />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Page;
