import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from 'redux/store';
import ErrorBoundary from 'components/_common/ErrorBoundary';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}
export default MyApp;
