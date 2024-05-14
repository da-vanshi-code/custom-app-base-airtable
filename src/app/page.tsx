import { TokenGate } from '@/components/TokenGate';
import { getSession } from '@/utils/session';
import {StatusDropdown} from '@/components/StatusDropDown';
import {Status, Task} from '@/components/TaskView';

import { getTaskLists, updateTaskStatus } from '@/utils/airtable';

interface ContentState {
  taskList: Task[];
}

async /* use client */ function Content({ searchParams }: { searchParams: SearchParams }) {
  const data = await getSession(searchParams);

  let taskList: Task[] = [];

  const loadTasks = async () => {
    console.log("Here")
    taskList = await getTaskLists();
    console.log(taskList)
  };

  const handleStatusChange = async (taskId: string, newStatus: Status) => {
      await updateTaskStatus(taskId, newStatus);
      loadTasks(); // Optionally optimize by updating local state instead of reloading
  };

  taskList = await getTaskLists();

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