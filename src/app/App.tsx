import { useTasks } from "@entities/task"

export const App = () => {
    const {data: tasks, isLoading, isError} = useTasks()

    if(isLoading) {
        return <span>Загрузка...</span>
    }

    if(isError) {
        return <span>Не удалось загрузить список задач</span>
    }

    return (
        <div>
            <h1>Мои задачи</h1>
            <ul>
            {tasks?.map(task => (
                <li key={task.id}>
                    {task.title} - <b>{task.status}</b>
                </li>
            ))}
            </ul>
        </div>
    )
}