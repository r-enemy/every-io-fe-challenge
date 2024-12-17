import { StepProps, Todo } from "../types";

import { TodoItem } from "./TodoItem";

import styles from "./Step.module.css";
import { useMemo } from "react";

export const Step = ({
  step,
  todos,
  onMoveForward,
  onMoveBack,
  canMoveLeftFn = () => true,
  canMoveRightFn = () => true,
}: StepProps) => {
  const currentTodos: Todo[] = useMemo(() => {
    return step.todos
      .map((todoId) => todos.find((todo) => todo.id === todoId)!)
      .filter(Boolean);
  }, [step]);

  return (
    <div className={styles.step}>
      <h3 className={styles.title}>{step.name}</h3>
      <ul className={styles.stepList}>
        {currentTodos.map((todo) => (
          <TodoItem
            onMoveForward={onMoveForward}
            onMoveBack={onMoveBack}
            canMoveLeft={canMoveLeftFn(step)}
            canMoveRight={canMoveRightFn(step)}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};