import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

import RootState from 'types/RootState';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
