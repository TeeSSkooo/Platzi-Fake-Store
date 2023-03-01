import { Helmet } from 'react-helmet';

import SignUp from 'components/features/sign-up/SignUp';

const SignUpPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Platzi Fake Store | Sign Up</title>
        <meta name="description" content="Sign up page" />
      </Helmet>
      <SignUp />
    </>
  );
};

export default SignUpPage;
