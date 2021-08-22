import React from 'react';

import useOpenAndClose from 'hooks/useOpenAndClose';

type Props =
  | {
      defaultValue?: string;
    }
  | undefined;

const useDropdown = (props: Props = {}) => {
  const { defaultValue } = props;
  const [value, setValue] = React.useState(defaultValue || '');
  const { isOpen, onToggle, onClose } = useOpenAndClose();

  const handleOptionClick = React.useCallback(
    (option: string) => {
      setValue(option);
      onClose();
    },
    [onClose]
  );

  return {
    value,
    onOptionClick: handleOptionClick,
    isDropdownVisible: isOpen,
    onToggleDropdownVisibility: onToggle,
    onCloseDropdown: onClose,
  };
};

export default useDropdown;
