import React from 'react';
import { useField } from 'formik';
import cn from 'classnames';

import ErrorMessage from 'components/_common/ErrorMessage';
import styles from './styles.module.scss';

type InputProps = {
  label: string;
  name: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ label, type, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [field, meta] = useField({ ...props });
  const isPasswordType = type === 'password';

  React.useEffect(() => {
    if (isPasswordType) {
      setShowPassword(isPasswordType);
    }
  }, [isPasswordType]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.root}>
      <label className={styles.label}>{label}</label>
      <input
        className={cn(styles.input, { [styles.errorInput]: meta.touched && meta.error })}
        {...field}
        {...props}
        type={isPasswordType && showPassword ? 'password' : type}
      />
      {isPasswordType && (
        <span className={styles.passwordVisibilityIcon} onClick={handleShowPassword}>
          {showPassword ? '^' : '?'}
        </span>
      )}
      {meta.touched && meta.error && (
        <ErrorMessage text={meta.error} className={styles.errorMessage} />
      )}
    </div>
  );
};

export default React.memo(Input);
