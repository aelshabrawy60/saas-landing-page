import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div 
        className="faq-question d-flex justify-content-between align-items-center"
        onClick={toggleOpen}
      >
        <span>Can I try ToDesktop without buying?</span>
        <span className={`toggle-icon ${isOpen ? 'rotate' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          Yes, ToDesktop offers a free trial that allows you to test the platform before making a purchase.
        </div>
      )}
    </div>
  );
};

export default FAQComponent;
