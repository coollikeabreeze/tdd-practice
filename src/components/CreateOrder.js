import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { OrderSummary } from '../components';

const CreateOrder = React.memo(() => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/ordersummary')}>
        Go to order Summary
      </button>
    </div>
  );
});

export default CreateOrder;
