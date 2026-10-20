import { http, HttpResponse } from 'msw'
const mockTasks = [
    { id: '1', title: 'Изучить FSD', status: 'todo' },
    { id: '2', title: 'Настроить MSW', status: 'in-progress' },
    { id: '3', title: 'Написать пет-проект', status: 'done' },
  ]

  export const handlers = [
    http.get('/api/tasks', () => {
      return HttpResponse.json(mockTasks)
    }),
  ]