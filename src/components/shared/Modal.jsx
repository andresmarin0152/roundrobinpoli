import React, { useState, useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsScrollDisabled(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsScrollDisabled(false);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={onClose}
        ></div>
      )}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6`}
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
