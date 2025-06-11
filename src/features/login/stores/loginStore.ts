import { create } from 'zustand';
import { User } from '@/entities/user/config/model';

type LoginState = {
  user: User | null;
  isAdmin: boolean;
  error: string | null;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
};

export const loginStore = create<LoginState>((set) => ({
  user: null,
  isAdmin: false,
  error: null,
  isLoading: false,

  setUser: (user) => set({ user, isAdmin: user?.role === 'admin', error: null }),
  setError: (error) => set({ error, user: null, isAdmin: false }),
  setLoading: (loading) => set({ isLoading: loading }),
}));
