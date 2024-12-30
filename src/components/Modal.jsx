import { forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open, onClose }) => {

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open])

  const dialog = useRef();
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
