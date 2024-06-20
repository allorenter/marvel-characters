import { PropsWithChildren, ReactNode } from 'react';
import { DefaultLoading } from './components/DefaultLoading';

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
  if (error !== null && error !== undefined) {
    if (typeof onErrorRender === 'function') {
      return <>{onErrorRender(error)}</>;
    }
    return <>ERROR</>;
  }

  if (isLoading) {
    if (typeof onIsLoadingRender === 'function') {
      return <>{onIsLoadingRender()}</>;
    }
    return <DefaultLoading />;
  }

  return children;
}
