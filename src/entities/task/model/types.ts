export interface Task {
    id: string
    title: string
    status: string
}

export interface CreateTaskDto {
    title: string;
}