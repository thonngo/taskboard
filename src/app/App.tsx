import {useEffect, useState} from "react"

export interface Task {
    id: string,
    title: string
    status: string
}

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch('/api/tasks').then(response=> response.json()).then(data => { 
            setTasks(data)
            setLoading(false)
        })
    }, [])
    if(loading) {
        return <span>Загрузка...</span>
    }

    return (
        <div>
            <h1>Мои задачи</h1>
            <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title} - <b>{task.status}</b>
                </li>
            ))}
            </ul>
        </div>
    )
}