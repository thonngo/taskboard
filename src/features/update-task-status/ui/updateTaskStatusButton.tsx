import type { FC, ReactNode } from 'react';
import { useUpdateTaskStatus } from '../model/useUpdateTaskStatus';

export interface UpdateTaskStatusButtonProps {
  status: string;
  children: ReactNode;
  taskId: string;
}

const chooseCorrectStatus = (status: string) => {
  switch (status) {
    case 'todo':
      return 'in-progress';
    case 'in-progress':
      return 'done';
    case 'done':
      return 'todo';
    default:
      return null;
  }
};

export const UpdateTaskStatusButton: FC<UpdateTaskStatusButtonProps> = ({
  status,
  taskId,
  children,
}) => {
  const { mutate, isPending } = useUpdateTaskStatus();

  const handleUpdate = () => {
    const updateStatus = chooseCorrectStatus(status);
    if (updateStatus) {
      mutate({ id: taskId, status: updateStatus });
    }
  };

  return (
    <button
      type="button"
      disabled={isPending}
      className="bg-transparent border-none p-0 cursor-pointer hover:opacity-80"
      onClick={handleUpdate}
    >
      {children}
    </button>
  );
};
