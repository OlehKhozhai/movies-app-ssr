import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type ErrorMessageProps = {
  text: string;
  className?: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text, className, ...props }) => {
  return (
    <p className={cn(styles.root, className)} {...props}>
      {text}
    </p>
  );
};

export default React.memo(ErrorMessage);
