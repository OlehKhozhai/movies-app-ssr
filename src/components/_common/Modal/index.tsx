import React from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.scss';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = React.useState(false);

  const component = (
    <div className={styles.root}>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeBtn} onClick={onClose}>
            +
          </button>
          {children}
        </div>
      </div>
    </div>
  );

  React.useEffect(() => {
    containerRef.current = document.querySelector('#modal');
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return mounted && containerRef.current && isOpen
    ? createPortal(component, containerRef.current)
    : null;
};

export default React.memo(Modal);
