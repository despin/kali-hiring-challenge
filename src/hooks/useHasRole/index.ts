import {useTypedSelector} from '../../store';

export default function useHasRole(requiredRole: string) {
  const role = useTypedSelector(state => state.auth.userData?.photoURL);

  return requiredRole === role;
}
