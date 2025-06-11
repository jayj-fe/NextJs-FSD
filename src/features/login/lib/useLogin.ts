import { useLoginMutation } from '@/features/login/model/useLoginMutation';
import { normalizeUser } from '@/entities/user/lib/UserAdaptor';
import { loginStore } from '@/features/login/stores/loginStore';

export function useLogin() {
  const mutation = useLoginMutation();

  const login = async (email: string, password: string) => {
    loginStore.getState().setLoading(true);

    try {
      const rawUser = await mutation.mutateAsync({ email, password });
      const user = normalizeUser(rawUser);

      loginStore.getState().setUser(user);
    } catch {
      loginStore.getState().setError('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    } finally {
      loginStore.getState().setLoading(false);
    }
  };

  return { login };
}
