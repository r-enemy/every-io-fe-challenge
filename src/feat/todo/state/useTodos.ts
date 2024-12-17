import { Step, Todo, TodoState, UseTodos } from "../types";
import { useState } from "react";

import { id } from "../../../utils/id";

export const useTodos: UseTodos = (initialSteps) => {
  const [steps, setSteps] = useState<Step[]>(() => {
    return initialSteps.map<Step>((step) => ({
      id: id(),
      name: step,
      todos: [],
    }));
  });

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoCreate: TodoState["todoCreate"] = (content) => {
    const newTodo: Todo = {
      content,
      id: id(),
      step: steps[0].id,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setSteps((prevSteps) => {
      const [firstStep] = prevSteps;
      const updatedFirstStep = {
        ...firstStep,
        todos: [...firstStep.todos, newTodo.id],
      };

      return [updatedFirstStep, ...prevSteps.slice(1)];
    });

    return newTodo;
  };

  const todoMoveForward: TodoState["todoMoveForward"] = (todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) return;

    const todoToMove = { ...todos[todoIndex] };
    const currentStepIndex = steps.findIndex(
      (step) => step.id === todoToMove.step,
    );
    if (currentStepIndex === -1) return;

    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex >= steps.length) return;

    todoToMove.step = steps[nextStepIndex].id;

    const oldStep = {
      ...steps[currentStepIndex],
      todos: steps[currentStepIndex].todos.filter((todo) => todo !== todoId),
    };
    const newStep = {
      ...steps[nextStepIndex],
      todos: [...steps[nextStepIndex].todos, todoToMove.id],
    };

    const stepsBefore = steps.slice(0, currentStepIndex);
    const stepsAfter = steps.slice(nextStepIndex + 1);

    setSteps([...stepsBefore, oldStep, newStep, ...stepsAfter]);
    setTodos(todos.map((todo) => (todo.id === todoId ? todoToMove : todo)));
  };

  const todoMoveBack: TodoState["todoMoveBack"] = (todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) return;

    const todoToMove = todos[todoIndex];
    const currentStepIndex = steps.findIndex(
      (step) => step.id === todoToMove.step,
    );
    if (currentStepIndex === -1) return;

    const prevStepIndex = currentStepIndex - 1;
    if (prevStepIndex < 0) return;

    todoToMove.step = steps[prevStepIndex].id;

    const oldStep = {
      ...steps[currentStepIndex],
      todos: steps[currentStepIndex].todos.filter((todo) => todo !== todoId),
    };
    const newStep = {
      ...steps[prevStepIndex],
      todos: [...steps[prevStepIndex].todos, todoToMove.id],
    };
    const beforeSteps = steps.slice(0, prevStepIndex);
    const afterSteps = steps.slice(currentStepIndex + 1);

    setSteps([...beforeSteps, newStep, oldStep, ...afterSteps]);
    setTodos(todos.map((todo) => (todo.id === todoId ? todoToMove : todo)));
  };

  return {
    todos,
    steps,
    todoCreate,
    todoMoveForward,
    todoMoveBack,
  };
};
