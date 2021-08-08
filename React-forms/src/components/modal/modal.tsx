import React from 'react';
import './modal.scss';

type TModal = {
  active: boolean,
  setActive: any,
};

const Modal: React.FC<TModal> = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-content"
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
      >
        Information sent successfully
      </div>
    </div>
  );
};

export default Modal;
