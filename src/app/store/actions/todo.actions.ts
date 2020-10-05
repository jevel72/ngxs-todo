import { Todo } from '../../models/interfaces/todo.interface';

export class AddTodo {
  public static readonly type: string = '[Todo] AddTodo';
  constructor(public todo: Todo) {}
}

export class UpdateTodo {
  public static readonly type: string = '[Todo] UpdateTodo';
  constructor(public todo: Todo) {}
}

export class DeleteTodo {
  public static readonly type: string = '[Todo] DeleteTodo';
  constructor(public id: number) {}
}

export class DeleteAllTodos {
  public static readonly type: string = '[Todo] DeleteAllTodos';
}
