import { Helmet } from 'react-helmet';

import LogIn from 'components/features/log-in/LogIn';

const LogInPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | Log In</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <LogIn />
    </>
  );
};

export default LogInPage;
