import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../api';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['tasks', 'delete'],
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    onError: (error: Error) => console.error('Ошибка useDeleteTask', error.message),
  });
};
