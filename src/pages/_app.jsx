import {QueryCache, ReactQueryCacheProvider} from 'react-query';
import {Hydrate} from 'react-query/hydration';
import 'styles/index.css';
import {ReactQueryDevtools} from 'react-query-devtools';
const queryCache = new QueryCache();

export default function App({Component, pageProps}) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </Hydrate>
    </ReactQueryCacheProvider>
  );
}
