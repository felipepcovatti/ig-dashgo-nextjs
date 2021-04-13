import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get('users')

  const users = data.users.map(({ createdAt, ...rest }) => ({
    createdAt: new Date(createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    ...rest,
  }))

  return users;
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5, // 5 sec
  })
}