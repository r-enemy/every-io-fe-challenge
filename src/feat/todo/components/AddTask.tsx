import { FormEventHandler, useRef } from "react";

import { AddTaskProps, AddTodoFormData } from "../types";

import styles from "./AddTask.module.css";

const inputNames: Record<keyof AddTodoFormData, string> = {
  content: "content",
};

export function AddTask({ onSubmit }: AddTaskProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    onSubmit({
      content: String(formData.get(inputNames.content)),
    });

    formRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className={styles.addTask}>
      <input
        type="text"
        name={inputNames.content}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button} title={"add task"}>
        &#43;
      </button>
    </form>
  );
}
