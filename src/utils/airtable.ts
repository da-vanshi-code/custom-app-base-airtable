// utils/airtable.ts
import Airtable from 'airtable';
import {Task, Status, Priority} from '@/components/TaskView';

const base = new Airtable({ apiKey: 'patqH7Emhly9Sorle.d2c4b17431561902566e052733e42da1326aabb86fb3397351a6b7898ea555c1' }).base('appF3Tt4Eu9b8Ccjw');

/*
interface Task {
  task: string;
  company: string;
  description: string;
  assignedTo: string;
  deadline: Date;
  status: Status;
  priority: Priority;
}
*/

export async function getTaskLists(): Promise<Task[]> {
// export const getTaskLists = async (): Promise<Task[]> => {
    try {
        const records = await base('Basic Airtable').select({
            view: 'tasks'
        }).all();

        const Tasks: Task[] = []
        records.map(record => Tasks.push({
            id: record.id,
            task: record.get('Task') as string,
            company: record.get('Company') as string,
            description: record.get('Description') as string,
            assignedTo: record.get('AssignedTo') as string,
            deadline: record.get('Deadline') as string,
            status: record.get('Status') as Status,
            priority: record.get('Priority') as Priority
        }));

        return Tasks
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch tasks');
    }
};

export async function updateTaskStatus(taskId: string, newStatus: Status) {
    await base('Basic Airtable').update([
        {
            id: taskId,
            fields: {
                'Status': newStatus
            }
        }
    ]);
    console.log("I am getting called")

};