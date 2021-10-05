import React, { useState, useEffect } from 'react';
import { Modal } from './modal';
import { Button } from '@reuse-react-components/experimenting.ui.button';

export const BasicModal = () => {
  const [openExternally, setOpenExternally] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<any>(false)
  useEffect(() => {
    let div = document.createElement('div');
    div.id = 'overlays';
    document.body.appendChild(div)
    setPortalElement(document.getElementById('overlays'));
    return () => {
      document.getElementById("overlays").remove();
      setPortalElement(undefined);
    }
  }, [])

  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }

  const onConfirm = () => {
    toggleExternally()
  }
  return (<div >
    <Button onClick={toggleExternally}><span>Open Modal</span></Button>
    <Modal modalTitle={'Example modal'} portalElement={portalElement} onClose={toggleExternally} isOpen={openExternally} >
      <h1>Hi From modal</h1>
      <Button onClick={onConfirm}><span>Confirm</span></Button>
    </Modal>
  </div>
  );
}
