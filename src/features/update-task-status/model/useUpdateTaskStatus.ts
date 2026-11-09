import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTaskStatus } from '../api';

export const useUpdateTaskStatus = () => {
  const queryClinet = useQueryClient();

  return useMutation({
    mutationKey: ['tasks'],
    mutationFn: updateTaskStatus,
    onSuccess: () => queryClinet.invalidateQueries({ queryKey: ['tasks'] }),
    onError: (error: Error) => console.error('Ошибка useUpdateTaskStatus', error.message),
  });
};
