import React from 'react';
import ReactSsrScript from '@react-ssr/express/script';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  script: string;
}

export const Layout = (props: LayoutProps) => {
  const {
    title,
    children,
    script,
  } = props;

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
        <ReactSsrScript script={script} />
      </body>
    </html>
  );
};
