import useAppSelector from './useAppSelector';

const useAuth = () => {
  const { email, id, token } = useAppSelector((state) => state.user);

  return {
    isAuth: Boolean(email),
    email,
    id,
    token,
  };
};

export default useAuth;
