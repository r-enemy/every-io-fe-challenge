import { TodoItemProps } from "../types";

import styles from "./TodoItem.module.css";

export function TodoItem({
  todo,
  onMoveForward,
  onMoveBack,
  canMoveRight = true,
  canMoveLeft = true,
}: TodoItemProps) {
  const handleMoveForward = () => {
    onMoveForward(todo);
  };

  const handleMoveBack = () => {
    onMoveBack(todo);
  };

  return (
    <li className={styles.todoItem}>
      <button
        onClick={handleMoveBack}
        disabled={!canMoveLeft}
        className={`${styles.button} ${styles.buttonBack} }`}
        title={`move task ${todo.content} back`}
      >
        &larr;
      </button>
      <div className={styles.content}>{todo.content}</div>
      <button
        onClick={handleMoveForward}
        disabled={!canMoveRight}
        className={`${styles.button} ${styles.buttonForward} }`}
        title={`move task ${todo.content} forward`}
      >
        &rarr;
      </button>
    </li>
  );
}
