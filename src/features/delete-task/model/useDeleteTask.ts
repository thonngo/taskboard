import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '../api';
import type { Task } from '@entities/task';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['tasks', 'delete'],
    mutationFn: deleteTask,
    onMutate: async ({ id }: { id: string }) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);

      queryClient.setQueryData<Task[]>(['tasks'], (oldTasks) =>
        oldTasks ? oldTasks?.filter((item) => item.id !== id) : [],
      );

      return { previousTasks };
    },
    onError: (error: Error, _, context) => {
      console.error('Ошибка useDeleteTask', error.message);

      if (context?.previousTasks) {
        queryClient.setQueryData<Task[]>(['tasks'], context?.previousTasks);
      }
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  });
};
