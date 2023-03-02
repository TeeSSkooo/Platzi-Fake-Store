import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserForm from 'components/features/user-form/UserForm';

import useAppDispatch from 'hooks/useAppDispatch';
import { setUser } from 'store/slices/userSlice';

const LogIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );

        navigate('/');
      })
      .catch((error) => {
        if (error.message.includes('auth/user-not-found')) {
          toast.error('The user with this email was not found', {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
  };

  return <UserForm title="Log In" linkText="Sign Up" href="/sign-up" buttonText="go" handleSubmit={submit} />;
};

export default LogIn;
