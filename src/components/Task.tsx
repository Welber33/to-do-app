import { CheckCircle, Trash } from "phosphor-react"

import styles from "./Task.module.css"
import { TaskProps } from "../App"

interface Props {
  task: TaskProps;
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        onClick={() => onComplete(task.id)}
        className={styles.checkContainer}
      >
        {task.isCompleted ?
          <CheckCircle size={30} /> :
          <div />
        }

      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button
        onClick={() => onDelete(task.id)}
        className={styles.deleteButton}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}