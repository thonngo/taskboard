import type { FC } from 'react';
import type { Task } from '../model/types';
import { twMerge } from 'tailwind-merge';

export interface TaskCardProps {
  task: Task[];
}

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <li>
      <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center">
        <span className="text-gray-800 font-medium">{task.title}</span>
        <span
          className={twMerge(
            'px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-600',
            task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : '',
            task.status === 'done' ? 'bg-green-100 text-green-700' : '',
          )}
        >
          {task.status}
        </span>
      </div>
    </li>
  );
};
