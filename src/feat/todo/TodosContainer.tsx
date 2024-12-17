import { useEffect } from "react";

import { AddTodoHandler, CanMoveFn, MoveTodoHandler } from "./types";
import { useTodos } from "./state/useTodos";
import { TodoList } from "./components/TodoList";

export function TodosContainer() {
  const { todos, steps, todoCreate, todoMoveForward, todoMoveBack } = useTodos([
    "To Do",
    "In Progress",
    "Done",
  ]);

  useEffect(() => {}, []);

  const handleMoveForward: MoveTodoHandler = (todo) => {
    todoMoveForward(todo.id);
  };

  const handleMoveBack: MoveTodoHandler = (todo) => {
    todoMoveBack(todo.id);
  };

  const handleAddTodo: AddTodoHandler = (data) => {
    todoCreate(data.content);
  };

  const canMoveRightFn: CanMoveFn = (step) => {
    return step.id !== steps.at(-1)?.id;
  };

  const canMoveLeftFn: CanMoveFn = (step) => {
    return step.id !== steps.at(0)?.id;
  };

  return (
    <TodoList
      onMoveForward={handleMoveForward}
      onMoveBack={handleMoveBack}
      canMoveRightFn={canMoveRightFn}
      canMoveLeftFn={canMoveLeftFn}
      onAddTodo={handleAddTodo}
      steps={steps}
      todos={todos}
    />
  );
}
