import React, { useState } from 'react';
import { Layout } from '../components';

interface IndexProps {
  user: any;
  script: string;
}

const Index = (props: IndexProps) => {
  const {
    user,
    script,
  } = props;

  const [message, setMessage] = useState('waiting...');

  const onClick = () => setMessage('This is a react-ssr!');

  return (
    <Layout
      title="An example of @react-ssr/express"
      script={script}
    >
      <p>Hello {user.name}!</p>
      <button onClick={onClick}>Click Me</button>
      <p>Message from state: {message}</p>
    </Layout>
  );
};

export default Index;
