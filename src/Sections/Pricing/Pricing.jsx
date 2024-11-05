import React, { useEffect, useRef, useState } from 'react';
import './Pricing.css';
import PriceCard from '../../Components/PriceCard/PriceCard';

const monthlyPlans = [
  { name: 'Free', subtitle: 'For personal use or testing your app before deploying to customers.', features: ['Free for personal use', 'Run app locally', 'No Code Signing', 'No Native Installers'], price: null, type: 0 },
  { name: 'Standard', price: 29, subtitle: 'For small teams and freelancers.', features: ['Custom branding', 'Advanced analytics', 'No Code Signing', 'Native Installers'], type: 0, duration: 'month' },
  { name: 'Pro', price: 70, subtitle: 'For businesses with higher demands.', features: ['Premium support', 'White-label options', 'Native Installers'], type: 1, duration: 'month' },
];

const yearlyPlans = [
  { name: 'Free', subtitle: 'For personal use or testing your app before deploying to customers.', features: ['Free for personal use', 'Run app locally', 'No Code Signing', 'No Native Installers'], type: 0, duration: 'year' },
  { name: 'Standard', price: 120, subtitle: 'For small teams and freelancers.', features: ['Custom branding', 'Advanced analytics', 'No Code Signing', 'Native Installers'], type: 0, duration: 'year' },
  { name: 'Pro', price: 140, subtitle: 'For businesses with higher demands.', features: ['Premium support', 'White-label options', 'Native Installers'], type: 1, duration: 'year' },
];

function Pricing() {
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState({ left: 0 });
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);

  // Update position based on selected button
  useEffect(() => {
    let targetButton = current === 0 ? targetRef1.current : targetRef2.current;
    if (targetButton) {
      // Use offsetLeft for position within container
      setPosition({
        left: targetButton.offsetLeft,
      });
    }
  }, [current]);

  return (
    <div className='pricing-container section'>
      <div className='section__header'>
        <div>Choose a plan that fits your needs</div>
      </div>
      <div className='d-flex justify-content-center mb-5'>
        <div className='price__chooser'>
          <button ref={targetRef1} onClick={() => setCurrent(0)}>Monthly</button>
          <button ref={targetRef2} onClick={() => setCurrent(1)}>Yearly</button>
          <div
            className='price_chooser_box'
            style={{
              left: `${position.left}px`,
              transition: 'left 0.3s ease'  // Smooth transition
            }}
          ></div>
        </div>
      </div>
      <div className='section__body'>
        <div className='d-flex gap-4 flex-wrap'>
          {current === 0
            ? monthlyPlans.map((plan, index) => <PriceCard key={`monthly-${index}`} data={plan} />)
            : yearlyPlans.map((plan, index) => <PriceCard key={`yearly-${index}`} data={plan} />)}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
