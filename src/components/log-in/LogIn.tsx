import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import UserForm from 'components/user-form/UserForm';

const LogIn: React.FC = () => {
  const submit = (email: string, password: string): void => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <UserForm title="Log In" linkText="Sign Up" href="/sign-up" buttonText="go" handleSubmit={submit} />;
};

export default LogIn;
