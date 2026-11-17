import { apiClient } from '@shared/api';

export const deleteTask = async ({ id }: { id: string }) => {
  const response = await apiClient.delete(`/tasks/${id}`);

  return response.data;
};
