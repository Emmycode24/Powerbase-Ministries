import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState(null);

  const openModal = (svc) => {
    setService(svc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setService(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, service, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};

export default ModalContext;
