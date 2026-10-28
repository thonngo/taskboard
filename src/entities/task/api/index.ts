import { apiClient } from "@shared/api/axios"
import type { Task } from "../model/types"

export const fetchTasks = async (): Promise<Task[]> => {
    const response = await apiClient.get('/tasks')

    return response?.data ?? []
}