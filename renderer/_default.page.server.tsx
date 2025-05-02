import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { PageContextServer } from './types.ts';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';

export async function render(pageContext: PageContextServer) {
  const { Page } = pageContext;
  const pageHtml = renderToString(
    <React.StrictMode>
      <StaticRouter location={pageContext.urlOriginal}>
        <Page />
      </StaticRouter>
    </React.StrictMode>
  );

  return escapeInject`<!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Аренда медицинских кроватей</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
