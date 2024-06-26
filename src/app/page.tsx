import { TokenGate } from '@/components/TokenGate';
import { getSession } from '@/utils/session';
import {StatusDropdown} from '@/components/StatusDropDown';
import {Status, Task} from '@/components/TaskView';
import { copilotApi } from 'copilot-node-sdk';

import { getTaskLists, updateTaskStatus } from '@/utils/airtable';


async /* use client */ function Content({ searchParams }: { searchParams: SearchParams }) {

  const data = await getSession(searchParams);
  let taskList: Task[] = [];


  taskList = await getTaskLists();

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Company</th>
                <th>Description</th>
                <th>Assigned To</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            {taskList.map((task) => (
                <tr key={task.id}>
                    <td>{task.task}</td>
                    <td>{task.company}</td>
                    <td>{task.description}</td>
                    <td>{task.assignedTo}</td>
                    <td>{task.deadline}</td>
                    <td>
                        <StatusDropdown 
                            initialValue={task.status}
                            taskId ={task.id}
                            // onChange={(newStatus) => handleStatusChange(task.id, newStatus)}
                        />
                    </td>
                    <td>{task.priority}</td>
                </tr>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td>---</td>
          </tr>
          <tr>
            <td>---</td>
          </tr>
          <tr>
            <td>---</td>
          </tr>
          <tr>
            <td>---</td>
          </tr>
          <tr>
            <td>*Please refresh to see the task status</td>
          </tr>
        </tfoot>
      </table>

    </main>
  );
}

export default /* use client */ function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <TokenGate searchParams={searchParams}>
      <Content searchParams={searchParams} />
    </TokenGate>
  );
}