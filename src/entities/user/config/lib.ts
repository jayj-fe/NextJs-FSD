import { User } from './model';

export function isAdmin(user: User): boolean {
  return user.role === 'admin';
}