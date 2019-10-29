import React from 'react';
import ReactSsrScript from '@react-ssr/express/script';

interface LayoutProps {
  children: React.ReactNode;
  script: string;
}

export const Layout = (props: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>react-ssr-tsx-starter</title>
      </head>
      <body>
        {props.children}
        <ReactSsrScript script={props.script} />
      </body>
    </html>
  );
};
