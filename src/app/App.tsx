import { TaskCard, useTasks } from '@entities/task';
import { useCreateTask } from '@features/create-task/model/useCreateTask';
import { ButtonCreate, Input } from '@shared/ui';
import { useCallback, useState } from 'react';

export const App = () => {
  const { data: tasks, isLoading, isError } = useTasks();
  const [title, setTitle] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const { isPending, mutateAsync } = useCreateTask();
  const handleCreate = useCallback(async () => {
    try {
      await mutateAsync({ title });
    } finally {
      setTitle('');
    }
  }, [mutateAsync, title]);

  if (isLoading) {
    return <span>Загрузка...</span>;
  }

  if (isError) {
    return <span>Не удалось загрузить список задач</span>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-2 max-w-2xl mx-auto pt-10 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Мои задачи</h1>
        <div className="flex gap-2 items-center">
          <Input value={title} onChange={handleChange} placeholder="Введите текст..." />
          <ButtonCreate disabled={!title || isPending} onClick={handleCreate}>
            Создать задачу
          </ButtonCreate>
        </div>
        <ul className="flex flex-col gap-3">
          {tasks?.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </div>
  );
};
