import { TaskItem } from "app/mutations/tasks/task-status"

export const fetchTaskListAPI = async (): Promise<TaskItem[]> => {
  return await fetch("http://localhost:3000/api/task/api").then((res) => res.json())
}

export const addTaskAPI = async (text: string): Promise<TaskItem> => {
  return await fetch("http://localhost:3000/api/task/api", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ text }),
  }).then((res) => res.json())
}

export const deleteTaskAPI = async (id: number): Promise<void> => {
  return await fetch("http://localhost:3000/api/task/api", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  }).then((res) => res.json())
}

export const updateTaskAPI = async (id: number, title: string) => {
  return await fetch("http://localhost:3000/api/task/api", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title }),
  }).then((res) => res.json())
}
