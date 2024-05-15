"use client";

import {Task, Status} from '@/components/TaskView';
import { getTaskLists, updateTaskStatus } from '@/utils/airtable';

interface DropdownProps {
    initialValue: Status;
    taskId: string;
}

export const StatusDropdown: React.FC<DropdownProps> = ({ initialValue, taskId }) => {
    return (
        <select value={initialValue} onChange={(e) => updateTaskStatus(taskId, e.target.value as Status)}>
            {Object.values(Status).map(status => (
                <option key={status} value={status}>{status}</option>
            ))}
        </select>
    );
};