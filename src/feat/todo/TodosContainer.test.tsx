import { render, screen } from "@testing-library/react";

import { TodosContainer } from "./TodosContainer";
import userEvent from "@testing-library/user-event";

const createTask = async (title: string) => {
  await userEvent.type(screen.getByRole("textbox"), title);
  await userEvent.click(screen.getByTitle("add task"));
};

const matchButtonForward = (task: string) => {
  return screen.getByTitle(`move task ${task} forward`);
};
const matchButtonBack = (task: string) => {
  return screen.getByTitle(`move task ${task} back`);
};

describe("<TodosContainer>", () => {
  it("renders correctly", () => {
    render(<TodosContainer />);
    expect(screen.getByRole("heading", { name: /to do/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /in progress/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /done/i })).toBeInTheDocument();
  });

  it("creates a new todo", async () => {
    render(<TodosContainer />);

    await createTask("task 1");

    expect(screen.getByText("task 1")).toBeInTheDocument();
    expect(matchButtonBack("task 1")).toBeDisabled();
    expect(matchButtonForward("task 1")).not.toBeDisabled();
  });

  it("moves todos", async () => {
    render(<TodosContainer />);

    await createTask("task 1");
    // Move forward to in progress
    await userEvent.click(matchButtonForward("task 1"));

    expect(matchButtonBack("task 1")).not.toBeDisabled();
    expect(matchButtonForward("task 1")).not.toBeDisabled();

    // Move forward to done
    await userEvent.click(matchButtonForward("task 1"));

    expect(matchButtonBack("task 1")).not.toBeDisabled();
    expect(matchButtonForward("task 1")).toBeDisabled();

    // Move back to in progress
    await userEvent.click(matchButtonBack("task 1"));

    expect(matchButtonBack("task 1")).not.toBeDisabled();
    expect(matchButtonForward("task 1")).not.toBeDisabled();

    // Move back to "to do"
    await userEvent.click(matchButtonBack("task 1"));
    expect(matchButtonBack("task 1")).toBeDisabled();
    expect(matchButtonForward("task 1")).not.toBeDisabled();
  });
});
