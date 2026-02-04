import { apiRequest } from "./api";

export type Task = {
  id: number;
  title: string;
  description: string | null;
  status: string;
  created_at: string;
};

export async function getTasks(): Promise<Task[]> {
  return apiRequest<Task[]>("/tasks", "GET");
}

export async function createTask(data: {
  title: string;
  description?: string;
}): Promise<Task> {
  return apiRequest<Task>("/tasks", "POST", data);
}

export async function updateTask(id: number, data: Partial<Task>): Promise<Task> {
  return apiRequest<Task>(`/tasks/${id}`, "PATCH", data);
}

export async function deleteTask(id: number): Promise<void> {
  await apiRequest<void>(`/tasks/${id}`, "DELETE");
}
