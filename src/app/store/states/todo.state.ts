import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import {
  AddTodo,
  UpdateTodo,
  DeleteTodo,
  DeleteAllTodos,
} from '../actions/todo.actions';
import { Todos } from '../../models/interfaces/todos.interface';
import { Todo } from '../../models/interfaces/todo.interface';

export const MockData: Todo[] = [
  {
    id: 0,
    title: 'Buy milk',
    description: 'I very hard love Nesquik and cant live without Milk!',
    done: false,
  },
  {
    id: 1,
    title: 'Update iPhone',
    description: 'My phone looking old in our days, need to update it!',
    done: false,
  },
];

@State<Todos>({
  name: 'todos',
  defaults: {
    todos: MockData,
  },
})
@Injectable()
export class TodosState {
  @Action(AddTodo) public addTodo(
    ctx: StateContext<Todos>,
    action: AddTodo
  ): void {
    const state: Todos = ctx.getState();
    ctx.patchState({
      todos: [...state.todos, action.todo],
    });
  }
  @Action(UpdateTodo) public updateTodo(
    ctx: StateContext<Todos>,
    action: UpdateTodo
  ): void {
    const state: Todos = ctx.getState();
    ctx.patchState({
      todos: [
        ...state.todos.filter((todo) => todo.id !== action.todo.id),
        action.todo,
      ],
    });
  }
  @Action(DeleteTodo) public deleteTodo(
    ctx: StateContext<Todos>,
    action: DeleteTodo
  ): void {
    const state: Todos = ctx.getState();
    ctx.patchState({
      todos: [
        ...state.todos
          .filter((todo) => todo.id !== action.id)
          .map((todo, index) => {
            return {
              ...todo,
              id: index,
            };
          }),
      ],
    });
  }
  @Action(DeleteAllTodos) public deleteAllTodos(
    ctx: StateContext<Todos>,
    action: DeleteAllTodos
  ): void {
    ctx.setState({ todos: [] });
  }
  @Selector() public static todos(state: Todos): Todo[] {
    return state.todos;
  }
  @Selector() public static reorderedTodos(state: Todos): Todo[] {
    return state.todos.reverse();
  }
  @Selector() public static done(state: Todos): Todo[] {
    return state.todos.filter((todo) => todo.done === true);
  }
  @Selector() public static notDone(state: Todos): Todo[] {
    return state.todos.filter((todo) => todo.done === false);
  }
  @Selector() public static count(state: Todos): number {
    return state.todos.length;
  }
}
