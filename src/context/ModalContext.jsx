import React, { createContext, useState, useContext } from 'react';

const modalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  return (
    <modalContext.Provider value={{ isModalVisible, showModal, hideModal }}>
      {children}
    </modalContext.Provider>
  );
};
export const useModal = () => useContext(modalContext);
