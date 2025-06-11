import { useMutation } from '@tanstack/react-query';
import { fetchUser } from '@/entities/user/api/ApiUser';

export function useLoginMutation() {
  return useMutation({
    mutationFn: async ({ email, password }: { email: string; password: string }) => {
      return await fetchUser(email, password);
    },
  });
}
