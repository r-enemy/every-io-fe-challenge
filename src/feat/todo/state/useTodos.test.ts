import { useTodos } from "./useTodos";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useTodos()", () => {
  it("creates empty steps in order", () => {
    const { result } = renderHook(() => useTodos(["to do", "in progress"]));

    expect(result.current).toMatchObject({
      steps: [
        {
          id: expect.any(String),
          name: "to do",
          todos: [],
        },
        {
          id: expect.any(String),
          name: "in progress",
          todos: [],
        },
      ],
    });
  });

  it("creates new todos on the first step", () => {
    const { result } = renderHook(() => useTodos(["to do", "in progress"]));
    const [firstStep] = result.current.steps;

    act(() => {
      result.current.todoCreate("task 1");
    });
    act(() => {
      result.current.todoCreate("task 2");
    });
    act(() => {
      result.current.todoCreate("task 3");
    });

    expect(result.current.todos).toEqual([
      {
        id: expect.any(String),
        content: "task 1",
        step: firstStep.id,
      },
      {
        id: expect.any(String),
        content: "task 2",
        step: firstStep.id,
      },
      {
        id: expect.any(String),
        content: "task 3",
        step: firstStep.id,
      },
    ]);

    expect(result.current.steps).toEqual([
      {
        id: expect.any(String),
        name: "to do",
        todos: result.current.todos.map((todo) => todo.id),
      },
      {
        id: expect.any(String),
        name: "in progress",
        todos: [],
      },
    ]);
  });

  it("moves a todo forward", () => {
    const { result } = renderHook(() => useTodos(["to do", "in progress"]));

    act(() => {
      result.current.todoCreate("task 1");
    });
    act(() => {
      result.current.todoCreate("task 2");
    });

    act(() => {
      result.current.todoMoveForward(result.current.todos[0].id);
    });

    expect(result.current).toMatchObject({
      todos: [
        {
          id: expect.any(String),
          content: "task 1",
          step: result.current.steps[1].id,
        },
        {
          id: expect.any(String),
          content: "task 2",
          step: result.current.steps[0].id,
        },
      ],
      steps: [
        {
          id: expect.any(String),
          name: "to do",
          todos: [result.current.todos[1].id],
        },
        {
          id: expect.any(String),
          name: "in progress",
          todos: [result.current.todos[0].id],
        },
      ],
    });
  });

  it("moves a backwards forward", () => {
    const { result } = renderHook(() => useTodos(["to do", "in progress"]));

    act(() => {
      result.current.todoCreate("task 1");
    });
    act(() => {
      result.current.todoCreate("task 2");
    });

    act(() => {
      result.current.todoMoveForward(result.current.todos[0].id);
    });
    act(() => {
      result.current.todoMoveBack(result.current.todos[0].id);
    });

    expect(result.current).toMatchObject({
      todos: [
        {
          id: expect.any(String),
          content: "task 1",
          step: result.current.steps[0].id,
        },
        {
          id: expect.any(String),
          content: "task 2",
          step: result.current.steps[0].id,
        },
      ],
      steps: [
        {
          id: expect.any(String),
          name: "to do",
          todos: [result.current.todos[1].id, result.current.todos[0].id],
        },
        {
          id: expect.any(String),
          name: "in progress",
          todos: [],
        },
      ],
    });
  });
});
