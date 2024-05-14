"use client";

import {Task, Status} from '@/components/TaskView';
import { getTaskLists, updateTaskStatus } from '@/utils/airtable';

// interface DropdownProps {
//     initialValue: Status;
//     onChange: (newStatus: Status) => void;
// }
interface DropdownProps {
    initialValue: Status;
    taskId: string;
}

// export const StatusDropdown: React.FC<DropdownProps> = ({ initialValue, onChange }) => {
//     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         const value = event.target.value;
//         const enumValue = Status[value as keyof typeof Status]; // Convert string to enum
//         if (enumValue !== undefined) {
//             onChange(enumValue);
//         } else {
//             console.error("Invalid status value");
//         }
//     };

//     return (
//         <select value={initialValue} onChange={handleChange}>
//             {Object.values(Status).map(status => (
//                 <option key={status} value={status}>{status}</option>
//             ))}
//         </select>
//     );
// };

// export const StatusDropdown: React.FC<DropdownProps> = ({ initialValue, onChange }) => {
//     return (
//         <select value={initialValue} onChange={(e) => onChange(e.target.value as Status)}>
//             {Object.values(Status).map(status => (
//                 <option key={status} value={status}>{status}</option>
//             ))}
//         </select>
//     );
// };

// const handleStatusChange = async (taskId: string, newStatus: Status) => {
//     console.log("I am getting called")
//     await updateTaskStatus(taskId, newStatus);
// };

export const StatusDropdown: React.FC<DropdownProps> = ({ initialValue, taskId }) => {
    return (
        <select value={initialValue} onChange={(e) => updateTaskStatus(taskId, e.target.value as Status)}>
            {Object.values(Status).map(status => (
                <option key={status} value={status}>{status}</option>
            ))}
        </select>
    );
};