import { PropsWithChildren, ReactNode } from 'react';
import { DefaultLoading } from './components/DefaultLoading';
import { DefaultError } from './components/DefaultError';

export default function ApiRequestStateHandler({
  children,
  isLoading,
  error,
  onErrorRender,
  onIsLoadingRender,
}: PropsWithChildren<{
  isLoading?: boolean;
  error?: Error | null;
  onErrorRender?: (error: Error) => ReactNode;
  onIsLoadingRender?: () => ReactNode;
}>) {
  if (isLoading) {
    if (typeof onIsLoadingRender === 'function') {
      return <>{onIsLoadingRender()}</>;
    }
    return <DefaultLoading />;
  }

  if (error !== null && error !== undefined) {
    if (typeof onErrorRender === 'function') {
      return <>{onErrorRender(error)}</>;
    }
    return <DefaultError />;
  }

  return children;
}
