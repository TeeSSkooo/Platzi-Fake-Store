import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import UserForm from 'components/user-form/UserForm';

const SignUp: React.FC = () => {
  const submit = (email: string, password: string): void => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return <UserForm title="Sign Up" linkText="Log In" href="/login" buttonText="get started" handleSubmit={submit} />;
};

export default SignUp;
