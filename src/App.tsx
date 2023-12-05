import { useState } from "react"

import { v4 as uuidv4 } from 'uuid';

import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addNewTask(taskTitle: string) {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }

      return task;
    });

    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addNewTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskById}
        onComplete={toggleTaskCompletedById}
      />
    </>
  )
}

export default App
