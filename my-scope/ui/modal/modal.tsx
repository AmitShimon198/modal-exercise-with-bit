// import React, { } from 'react';
import React,{ useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import classes from './modal.module.css';

type ModalProps = {
    children: JSX.Element,
    isOpen: boolean,
    onClose: any,
    portalElement: any,
    onConfirm: React.MouseEventHandler
}
type ModalOverlayProps = {
    children: JSX.Element,
    onClose: React.MouseEventHandler,
    onConfirm: React.MouseEventHandler
}

type BackdropProps = {
    onClose: any,
}

const Backdrop = ({ onClose }: BackdropProps) => {
    return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children, onClose, onConfirm }: ModalOverlayProps) => {
    const onButtonClick: React.MouseEventHandler = (event) => {
        onClose?.(event);
    }
    return (
        <div className={classes.modal}>
            <div>
                <div onClick={onButtonClick}>X</div>
            </div>
            <div className={classes.content}>{children}</div>
            <div onClick={onConfirm}>Confirm</div>
        </div>
    );
};



export const Modal = ({
    children,
    onClose,
    onConfirm,
    portalElement,
    isOpen = false }: ModalProps) => {

    const toggleModal = () => {
        onClose();
    }

    if (isOpen) {
        return (
            <>
                {ReactDOM.createPortal(
                    <>
                        <Backdrop onClose={toggleModal} />
                        <ModalOverlay onConfirm={onConfirm} onClose={toggleModal}>{children}</ModalOverlay>
                    </>,
                    portalElement
                )}
            </>)
    }
    return null
}


