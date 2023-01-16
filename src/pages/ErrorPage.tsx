import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';

interface routeError {
  statusText: string;
  message: string;
}

export const ErrorPage: FC = () => {
  const error = useRouteError() as routeError;
  console.dir({ error });

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
