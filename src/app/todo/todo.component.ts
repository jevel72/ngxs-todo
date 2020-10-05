import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { Todo } from '../models/interfaces/todo.interface';
import { TodosState } from '../store/states/todo.state';
import { DeleteTodo, DeleteAllTodos } from '../store/actions/todo.actions';

@Component({
  selector: 'hotel-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {}
  public displayedColumns: string[] = ['id', 'title', 'description', 'done'];
  public selectedRowId: number = -1;
  public updateSelectedRow(id: number): void {
    this.selectedRowId = id;
  }
  public deleteTodo(): void {
    this.store.dispatch(new DeleteTodo(this.selectedRowId));
  }
  public deleteAllTodos(): void {
    this.store.dispatch(new DeleteAllTodos());
  }
  @Select(TodosState.todos) public todos$: Observable<Todo[]>;
}
