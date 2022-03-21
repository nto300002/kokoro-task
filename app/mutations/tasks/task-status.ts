import { atom, selector, useRecoilValue } from "recoil"
import { fetchTaskListAPI } from "../../api/task/api"

export interface TaskItem {
  id: number
  title: string
  mental: number
}

export const taskListState = atom<TaskItem[]>({
  key: "taskListState",
  default: selector({
    key: "initialTaskListState",
    get: async () => await fetchTaskListAPI(),
  }),
})

const taskListSelector = selector({
  key: "taskListSelector",
  get: ({ get }) => get(taskListState),
})

export const taskSelectors = {
  useGetTaskList: () => useRecoilValue(taskListSelector),
}
