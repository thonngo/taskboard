import type { CreateTaskDto } from '@entities/task';
import { apiClient } from '@shared/api/axios';

export const createTask = async (payload: CreateTaskDto) => {
  const { data: response } = await apiClient.post('/tasks', payload);

  return response;
};
