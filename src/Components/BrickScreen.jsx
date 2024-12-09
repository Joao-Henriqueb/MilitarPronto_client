import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StatusScreen } from '@mercadopago/sdk-react';

const BrickScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentStatus, paymentDetails } = location.state || {};
  console.log(paymentDetails);
  console.log(paymentDetails?.payment_id);
  console.log(paymentStatus);
  useEffect(() => {
    if (!paymentStatus) {
      navigate('/'); // Redireciona para a página inicial se não houver status
    }
  }, [paymentStatus, navigate]);

  if (!paymentStatus || !paymentDetails?.payment_id) return null;

  return (
    <div>
      <h1>Estado do Pagamento</h1>
      <StatusScreen
        initialization={{
          status: paymentStatus,
          paymentId: paymentDetails?.payment_id || 'N/A',
        }}
        onReady={() => console.log('Status Screen pronto.')}
      />
    </div>
  );
};

export default BrickScreen;
