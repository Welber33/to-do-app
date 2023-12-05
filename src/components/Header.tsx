import ToDoLogo from "../assets/Logo.svg"
import { PlusCircle } from "phosphor-react"

import styles from "./Header.module.css"
import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState<string>("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  return (
    <header className={styles.header}>
      <img src={ToDoLogo} alt="" />

      <form
        onSubmit={handleSubmit}
        className={styles.newTaskForm}
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => 
              setTitle(event.target.value)
          }
          value={title} 
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}