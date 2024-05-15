import React from 'react';

export enum Status {
  Complete = 'Complete',
  InProgress = 'In progress',
  Kickoff = 'Kickoff',
  Planning = 'Planning',
  Delayed = 'Delayed',
  ToDo = 'ToDo'
}

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low'
}

export type Task = {
  id: string;  // Unique identifier for each task
  task: string;
  company: string;
  description: string;
  assignedTo: string;
  deadline: string;
  status: Status;
  priority: Priority;
};