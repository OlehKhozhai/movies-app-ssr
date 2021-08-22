import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import cn from 'classnames';

import ErrorMessage from 'components/_common/ErrorMessage';
import hooks from 'hooks';
import useClickOutside from 'hooks/useClickOutside';
import styles from './styles.module.scss';

type SelectProps = {
  options: ReadonlyArray<string>;
  label: string;
  name: string;
  placeholder: string;
  className?: string;
};

const Select: React.FC<SelectProps> = ({ label, options, placeholder, ...props }) => {
  const [field, meta, { setValue }] = useField({ ...props });
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, onClose, onOpen } = hooks.useOpenAndClose();
  useClickOutside({ ref: dropdownRef, callback: isOpen ? onClose : undefined });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue([...field.value, e.target.value]);
  };

  return (
    <div className={styles.root} ref={dropdownRef} onClick={onOpen}>
      <label className={styles.label}>{label}</label>

      <input
        className={cn(styles.input, { [styles.inputError]: meta.touched && meta.error })}
        value={field.value.join(', ')}
        placeholder={placeholder}
        disabled
      />

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option) => (
            <li key={option} className={styles.dropdownItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                value={option}
                checked={field.value.includes(option)}
                onChange={handleOnChange}
              />
              {option}
            </li>
          ))}
        </ul>
      )}

      {meta.touched && meta.error && (
        <ErrorMessage text={meta.error} className={styles.errorMessage} />
      )}
    </div>
  );
};

export default React.memo(Select);
