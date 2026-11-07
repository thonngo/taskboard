import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../api/index';

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['task'],
    mutationFn: createTask,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
    onError: (error) => console.error('Ошибка useCreateTask', error.message),
  });
};
