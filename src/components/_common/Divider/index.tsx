import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type DividerProps = {
  className?: string;
};

const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={cn(styles.root, className)} />;
};

export default React.memo(Divider);
