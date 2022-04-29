import React, { useState, useEffect } from 'react';

// パスカルケースで書く
const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log('Current state is', open);
    if (open) {
      console.log('Subscribe Database');
    }
    return () => {
      console.log('Unsubscribe database');
    };
  });

  return <button onClick={toggle}>{open ? 'OPEN' : 'CLOSE'}</button>;
};

export default ToggleButton;
