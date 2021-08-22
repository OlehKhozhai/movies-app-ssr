import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonProps = {
  title?: string | React.ReactNode;
  type?: 'button' | 'submit';
  linkTo?: string;
  variation?: 'primary' | 'primaryOutline' | 'secondary';
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = 'button',
  variation = 'primary',
  linkTo,
  children,
  className,
  disabled = false,
  onClick,
}) => {
  return linkTo ? (
    <Link href={linkTo}>
      <a className={cn(styles.root, styles[variation], className)}>{title || children}</a>
    </Link>
  ) : (
    <button
      className={cn(styles.root, styles[variation], className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export default React.memo(Button);
