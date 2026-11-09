import { apiClient } from '@shared/api';

export const updateTaskStatus = async ({ id, status }: { id: string; status: string }) => {
  const response = await apiClient.patch(`/tasks/${id}`, { status });

  return response.data;
};
