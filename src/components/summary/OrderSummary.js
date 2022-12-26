import React from 'react';
import SummaryForm from './SummaryForm';

const OrderSummary = React.memo(() => {
  return (
    <div>
      <h1>Sundaes on Demand</h1>
      <h2>Order Summary</h2>
      <h3>Scoops: </h3>
      <h3>Toppings: </h3>
      <h3>Total: </h3>
      <SummaryForm />
    </div>
  );
});

export default OrderSummary;
