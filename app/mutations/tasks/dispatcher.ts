import { useRecoilCallback } from "recoil"
import { taskListState } from "./task-status"
import { addTaskAPI, updateTaskAPI, deleteTaskAPI } from "app/api/task/api"

export const useCreateDispatcher = () => {
  const addTask = useRecoilCallback(
    ({ set }) =>
      async (title: string) => {
        const newTask = await addTaskAPI(title)
        set(taskListState, (oldTasks) => [...oldTasks, newTask])
      },
    []
  )

  const deleteTask = useRecoilCallback(({ set }) => async (id: number) => {
    await deleteTaskAPI(id)
    set(taskListState, (oldTasks) => oldTasks.filter((task) => task.id != id))
  })

  const updateTask = useRecoilCallback(
    ({ set }) =>
      async (id: number, title: string) => {
        const updateTask = await updateTaskAPI(id, title)
        set(taskListState, (oldTasks) =>
          oldTasks.map((task) => (task.id === id ? updateTask : task))
        )
      },
    []
  )

  return {
    addTask,
    deleteTask,
    updateTask,
  }
}
