import React from 'react';

import Button from 'components/_common/Button';
import styles from './styles.module.scss';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.root}>
          <h1 className={styles.title}>Oops, something went wrong</h1>
          <Button title="Home" />
        </div>
      );
    }

    return this.props.children;
  }
}
