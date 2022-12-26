import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from 'react-router-dom';
import { OrderSummary, CreateOrder } from './components';

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<CreateOrder />} />
      <Route path="/ordersummary" element={<OrderSummary />} />
    </Routes>
  );
};

export default Router;
