import { User } from '@/entities/user/config/model';

export function normalizeUser(data: any): User {
  return {
    id: String(data.id),
    name: data.name ?? 'Unknown',
    email: data.email ?? '',
    role: data.role === 'admin' ? 'admin' : 'user',
  };
}