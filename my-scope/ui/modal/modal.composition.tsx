import React, { useState, useEffect } from 'react';
import { Modal } from './modal';



export const BasicModal = () => {
  const [openExternally, setOpenExternally] = useState<boolean>(false);
  const [portalElement, setPortalElement]=useState<any>(false)
  useEffect(() => {
    let div = document.createElement('div');
    div.id = 'overlays';
    document.body.appendChild(div)
    setPortalElement(document.getElementById('overlays'));
    return () => {
      document.getElementById("overlays").remove();
      setPortalElement(undefined);
    }
  },[])
  const toggleExternally = () => {
    setOpenExternally(prevState => !prevState)
  }

  const onConfirm = () => {
    toggleExternally()
  }
  return (<div >
    <button onClick={toggleExternally}>Open Modal</button>
    <Modal portalElement={portalElement} onConfirm={onConfirm} onClose={toggleExternally} isOpen={openExternally} >
      <h1>Hi From modal</h1>
      <div onClick={onConfirm}>Confirm</div>
    </Modal>
  </div>
  );
}
