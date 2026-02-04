// road-markings-frontend/src/pages/TasksPage.tsx
import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, type Task } from "../shared/tasks";

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function load() {
    try {
      setLoading(true);
      setError(null);
      const data = await getTasks();
      setTasks(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка загрузки");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    try {
      const task = await createTask({ title, description });
      setTasks((prev) => [task, ...prev]);
      setTitle("");
      setDescription("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка создания");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Удалить задачу?")) return;
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Ошибка удаления");
    }
  }

  if (loading) return <p>Загрузка задач…</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Задачи</h1>

      <form onSubmit={handleCreate} style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Создать</button>
      </form>

      {tasks.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Статус</th>
              <th>Создана</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.status}</td>
                <td>{new Date(t.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDelete(t.id)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};
