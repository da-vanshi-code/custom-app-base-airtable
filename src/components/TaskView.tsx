import React from 'react';

export enum Status {
  Done = 'Done',
  InProgress = 'In progress',
  Blocked = 'Blocked',
  Kickoff = 'Kickoff',
  Delayed = 'Delayed'
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