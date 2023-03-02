import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserForm from 'components/features/user-form/UserForm';

import useAppDispatch from 'hooks/useAppDispatch';
import { setUser } from 'store/slices/userSlice';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submit = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
        if (error.message.includes('auth/email-already-in-use')) {
          toast.error('This email already used!', {
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

  return <UserForm title="Sign Up" linkText="Log In" href="/login" buttonText="get started" handleSubmit={submit} />;
};

export default SignUp;
