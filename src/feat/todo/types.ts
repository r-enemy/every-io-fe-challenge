// Entities
export type Step = {
  id: string;
  name: string;
  todos: Todo["id"][];
};

export type Todo = {
  id: string;
  content: string;
  step: Step["id"];
};

// State
export type TodoState = {
  todos: Todo[];
  steps: Step[];
  todoCreate(content: string): Todo;
  todoMoveForward(todoId: Todo["id"]): void;
  todoMoveBack(todoId: Todo["id"]): void;
};

export type UseTodos = (steps: string[]) => TodoState;

// Components

export type CanMoveFn = (step: Step) => boolean;
export type MoveTodoHandler = (todo: Todo) => void;

export type TodoListProps = {
  todos: Todo[];
  steps: Step[];
  onMoveForward: MoveTodoHandler;
  onMoveBack: MoveTodoHandler;
  onAddTodo: AddTodoHandler;
  canMoveLeftFn?: CanMoveFn;
  canMoveRightFn?: CanMoveFn;
};

export type StepProps = {
  step: Step;
  todos: Todo[];
  onMoveForward: MoveTodoHandler;
  onMoveBack: MoveTodoHandler;
  canMoveLeftFn?: CanMoveFn;
  canMoveRightFn?: CanMoveFn;
};

export type TodoItemProps = {
  todo: Todo;
  onMoveForward: MoveTodoHandler;
  onMoveBack: MoveTodoHandler;
  canMoveLeft?: boolean;
  canMoveRight?: boolean;
};

export type AddTodoFormData = Pick<Todo, "content">;
export type AddTodoHandler = (data: AddTodoFormData) => void;

export type AddTaskProps = {
  onSubmit: AddTodoHandler;
};
