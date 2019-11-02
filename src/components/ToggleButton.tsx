import React, { useState } from 'react';
import './ToggleButton.scss';

export default () => {
  const [open, setOpen] = useState<boolean>(false);

  function onClick() {
    setOpen(!open);
  }

  return (
    <div id="toggle-icon" onClick={onClick}>
      <span id="span-1" className={open ? 'open' : ''} />
      <span id="span-2" className={open ? 'open' : ''} />
      <span id="span-3" className={open ? 'open' : ''} />
    </div>
  );
};
