import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type DropdownOptionProps = {
  option: string;
  className?: string;
  onOptionClick: (value: string) => void;
};

const DropdownOption: React.FC<DropdownOptionProps> = ({ option, className, onOptionClick }) => {
  const handleOptionClick = (e: React.MouseEvent) => {
    e?.stopPropagation();
    onOptionClick(option);
  };

  return (
    <li className={cn(styles.root, className)} onClick={handleOptionClick}>
      {option}
    </li>
  );
};

export default React.memo(DropdownOption);
