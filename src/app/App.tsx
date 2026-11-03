import { useTasks } from "@entities/task"
import { useCreateTask } from "@features/create-task/model/useCreateTask"
import { useCallback, useState } from "react"

export const App = () => {
    const {data: tasks, isLoading, isError} = useTasks()
    const [title, setTitle] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const {isPending, mutateAsync} = useCreateTask()
    const handleCreate = useCallback(async() => {
        try {
            await mutateAsync({title})
        } finally {
            setTitle('')
        }
    }, [mutateAsync, title])

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
            <div>
                <input value={title} onChange={handleChange} placeholder="Введите текст..."/>
                <button disabled={!title || isPending} onClick={handleCreate}>Создать задачу</button>
            </div>
        </div>
    )
}