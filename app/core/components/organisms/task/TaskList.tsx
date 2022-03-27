import { taskSelectors } from "app/mutations/tasks/task-status"
import Task from "app/pages/task"

interface Props {
  deleteTask: (id: number) => void
  updateTask: (id: number, title: string) => void
}

const TaskList = ({ deleteTask, updateTask }: Props) => {
  // Unhandled Runtime Error
  // TypeError: Cannot read properties of undefined (reading 'useGetTaskList')
  const tasks = taskSelectors.useGetTaskList()
  return (
    <div>
      {/* {tasks.map((task, i) => (
        <Task key={i} deleteTask={deleteTask} updateTask={updateTask} {...task} />
      ))} */}
    </div>
  )
}

export default TaskList
