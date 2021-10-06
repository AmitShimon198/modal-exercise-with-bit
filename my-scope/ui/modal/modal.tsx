// import React, { } from 'react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Hr } from '@reuse-react-components/experimenting.ui.hr';
import classes from './modal.module.css';

export type ModalProps = {
  children: JSX.Element | JSX.Element[] | string,
  isOpen: boolean,
  mainContentClassName?: string,
  onClose: React.MouseEventHandler,
  modalTitle: string,
  portalElement: HTMLElement,
}
type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[] | string,
  modalTitle: string,
  onClose: React.MouseEventHandler,
  mainContentClassName?: string;
}

type BackdropProps = {
  onClose: React.MouseEventHandler,
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children, onClose, mainContentClassName = '', modalTitle = '' }: ModalOverlayProps) => {
  const onButtonClick: React.MouseEventHandler = (event) => {
    onClose?.(event);
  }
  return (
    <div className={classes.modal}>
      <div className={classes.headerContainer}>
        <div className={classes.title}>{modalTitle}</div>
        <div className={classes.button} onClick={onButtonClick}>&#10006;</div>
      </div>
      <Hr />
      <div className={mainContentClassName}>
        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};



export const Modal = ({
  modalTitle,
  children,
  onClose,
  portalElement,
  mainContentClassName,
  isOpen = false }: ModalProps) => {

  const toggleModal = (event) => {
    onClose(event);
  }

  if (isOpen) {
    return (
      <>
        {ReactDOM.createPortal(
          <>
            <Backdrop onClose={toggleModal} />
            <ModalOverlay
              modalTitle={modalTitle}
              mainContentClassName={mainContentClassName}
              onClose={toggleModal}>{children}</ModalOverlay>
          </>,
          portalElement
        )}
      </>)
  }
  return null
}


