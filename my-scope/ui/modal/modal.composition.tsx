import React, { useState } from 'react';
import { Modal } from './modal';

let div = document.createElement('div');
div.id = 'overlays';
document.body.appendChild(div)
const portalElement: any = document.getElementById('overlays');

export const BasicModal = () => {
  const [openExternally, setOpenExternally] = useState<boolean>(false);

  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }

  const onConfirm = () => {
    toggleExternally()
  }
  return (<div >
    <button onClick={toggleExternally}>Open externally</button>
    <Modal portalElement={portalElement} onConfirm={onConfirm} onClose={toggleExternally} isOpen={openExternally} >
      <h1>Hi</h1>
    </Modal>
  </div>
  );
}
