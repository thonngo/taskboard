import type { FC } from 'react';
import { useDeleteTask } from '../model/useDeleteTask';
import { Trash2 } from 'lucide-react';

export interface DeleteTaskButtonProps {
  id: string;
}

export const DeleteTaskButton: FC<DeleteTaskButtonProps> = ({ id }) => {
  const { mutate, isPending } = useDeleteTask();
  const handleDelete = () => {
    mutate({ id });
  };
  return (
    <button
      type="button"
      disabled={isPending}
      className="bg-transparent border-none p-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleDelete}
    >
      <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
    </button>
  );
};
