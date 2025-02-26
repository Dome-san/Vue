import type { Project } from '@/modules/projects/interfaces/projects.interface';

export const fakeProjects: Project[] = [
  {
    id: '1',
    name: 'Project 1',
    tasks: [
      { id: '1', name: 'task 1', completedAt: new Date() },
      { id: '2', name: 'task 2' },
      { id: '3', name: 'task 3' },
      { id: '4', name: 'task 4' },
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    tasks: [],
  },
  {
    id: '3',
    name: 'Project 3',
    tasks: [
      { id: '1', name: 'task 1' },
      { id: '1', name: 'task 2', completedAt: new Date() },
    ],
  },
  {
    id: '4',
    name: 'Project 4',
    tasks: [
      { id: '1', name: 'task 1' },
      { id: '1', name: 'task 2', completedAt: new Date() },
      { id: '1', name: 'task 3' },
    ],
  },
];
