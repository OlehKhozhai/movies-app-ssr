import React from 'react';
import cn from 'classnames';

import DropdownOption from 'components/_common/DropdownOption';
import useClickOutside from 'hooks/useClickOutside';
import styles from './styles.module.scss';

type DropdownProps = {
  options: ReadonlyArray<string>;
  isOpen: boolean;
  value?: string;
  className?: string;
  onToggle: (e?: React.MouseEvent<HTMLElement>) => void;
  onClose: () => void;
  onOptionClick: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  isOpen,
  value,
  className,
  onOptionClick,
  onToggle,
  onClose,
}) => {
  const dropdownRef = React.useRef(null);

  useClickOutside({ ref: dropdownRef, callback: onClose });

  return (
    <div className={cn(styles.root, className)} ref={dropdownRef}>
      <span className={styles[value ? 'value' : 'threeDots']} onClick={onToggle}>
        {value || '...'}
      </span>

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option) => {
            return <DropdownOption key={option} option={option} onOptionClick={onOptionClick} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Dropdown);
