import useAppSelector from './useAppSelector';

const useAuth = () => {
  const { email, id, token, createdAt, lastSignIn } = useAppSelector((state) => state.user);

  return {
    isAuth: Boolean(email),
    email,
    id,
    token,
    createdAt,
    lastSignIn,
  };
};

export default useAuth;
