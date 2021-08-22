import React from 'react';

type Props = { onCloseCallback?: () => void } | undefined;

const useOpenAndClose = (props: Props = {}) => {
  const { onCloseCallback } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    if (onCloseCallback) {
      onCloseCallback();
    }

    setIsOpen(false);
  }, [onCloseCallback]);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleToggle = React.useCallback(
    (e?: React.MouseEvent<HTMLElement>) => {
      if (e) {
        e.stopPropagation();
      }

      setIsOpen((prevState) => {
        if (!prevState && onCloseCallback) {
          onCloseCallback();
        }

        return !prevState;
      });
    },
    [onCloseCallback]
  );

  return {
    isOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    onToggle: handleToggle,
  };
};

export default useOpenAndClose;
