import React, { useState, useEffect } from 'react';
import { Modal } from './modal';
import { Button } from '@reuse-react-components/experimenting.ui.button';

export const BasicModal = () => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [portalElement, setPortalElement] = useState<HTMLElement>()
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
    setToggleModal(prevState => !prevState)
  }

  const onConfirm = () => {
    toggleExternally()
  }
  return (<div >
    <Button onClick={toggleExternally}><span>Open Modal</span></Button>
    <Modal modalTitle={'Example modal'} portalElement={portalElement} onClose={toggleExternally} isOpen={toggleModal} >
      <h1>Hi From modal</h1>
      <Button onClick={onConfirm}><span>Confirm</span></Button>
    </Modal>
  </div>
  );
}
