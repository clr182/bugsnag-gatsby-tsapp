import React from "react";
import ErrorBoundary from './ErrorBoundary';

const wrappedRootElement = (element: ReactNode) => {
    return (
      <ErrorBoundary>
        <WrapRootElement>{element}</WrapRootElement>
      </ErrorBoundary>
    );
  };
  
  export const wrapRootElement: GatsbyBrowser['wrapRootElement'] =
    ({ element }) => {
      return wrappedRootElement(element);
    };

    export default wrappedRootElement;