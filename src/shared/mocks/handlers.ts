import type { CreateTaskDto, Task } from '@entities/task';
import { http, HttpResponse, type HttpHandler } from 'msw';
let mockTasks = [
  { id: '1', title: 'Изучить FSD', status: 'todo' },
  { id: '2', title: 'Настроить MSW', status: 'in-progress' },
  { id: '3', title: 'Написать пет-проект', status: 'done' },
];

export const handlers: HttpHandler[] = [
  http.get('/api/tasks', () => {
    return HttpResponse.json(mockTasks);
  }),
  http.post<never, CreateTaskDto, Task & { createdAt: string }>(
    '/api/tasks',
    async ({ request }) => {
      const body = await request.json();

      const newTaskId = new Date().toISOString();

      mockTasks = [...mockTasks, { id: newTaskId, title: body?.title, status: 'todo' }];
      return HttpResponse.json(
        {
          ...body,
          id: newTaskId,
          status: 'todo',
          createdAt: new Date().toISOString(),
        },
        { status: 201 },
      );
    },
  ),
];
