import React from 'react';
import { useRouteMatch } from 'react-router';

export default function NotFound404() {
  const { url } = useRouteMatch();

  return (
    <>
      <h1>
        No encontramos la pagina que buscas!
      </h1>
      <div>{url}</div>
    </>
  );
}
