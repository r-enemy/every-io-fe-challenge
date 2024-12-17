import { TodoListProps } from "../types";

import { AddTask } from "./AddTask";
import { Step } from "./Step";

import styles from "./TodoList.module.css";

export function TodoList({
  todos,
  steps,
  onMoveForward,
  onMoveBack,
  onAddTodo,
  canMoveRightFn,
  canMoveLeftFn,
}: TodoListProps) {
  return (
    <div className={styles.todoList}>
      <div className={styles.steps}>
        {steps.map((step) => (
          <Step
            onMoveForward={onMoveForward}
            onMoveBack={onMoveBack}
            key={step.id}
            step={step}
            todos={todos}
            canMoveRightFn={canMoveRightFn}
            canMoveLeftFn={canMoveLeftFn}
          />
        ))}
      </div>
      <AddTask onSubmit={onAddTodo} />
    </div>
  );
}
