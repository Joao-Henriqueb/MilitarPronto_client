import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;
import styles from './Mercadopago.module.css';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';

const MercadoPago = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { preferenceId, amount, description, uid, plano } =
    location.state || {};
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preferenceId) {
      initMercadoPago('TEST-0680aabf-5872-4b52-8b33-fdf9e49d2f89');
    } else {
      console.error('Dados de pagamento ausentes.');
    }
  }, [preferenceId]);
  if (!preferenceId) {
    return <p>Erro: Preferência de pagamento não encontrada.</p>;
  }

  async function handlePayment(paymentData) {
    setLoading(true);
    const bodyData = { paymentData, uid, description, plano };
    try {
      const response = await fetch(`${apiUrl}/processar_pagamento`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      const result = await response.json();

      // Redireciona para a página do Status Screen com os dados
      navigate('/status-pagamento', {
        state: {
          paymentStatus: result.success ? 'approved' : 'rejected',
          paymentDetails: result,
        },
      });
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      navigate('/status-pagamento', {
        state: {
          paymentStatus: 'error',
          paymentDetails: { message: error.message },
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.paymentContent}>
      {loading ? (
        <p>Processando pagamento...</p>
      ) : (
        <div className={styles.payment}>
          <Payment
            initialization={{ preferenceId, amount }}
            customization={{
              paymentMethods: {
                creditCard: 'all',
                debitCard: 'all',
                ticket: 'all',
                bankTransfer: 'all',
              },
            }}
            onSubmit={(params) => {
              handlePayment(params);
            }}
            onReady={() => {
              console.log('Payment Brick pronto.');
            }}
            onError={(error) => {
              console.error('Erro no Payment Brick:', error);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MercadoPago;
