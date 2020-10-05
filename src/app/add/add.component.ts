import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { Store, Select } from '@ngxs/store';

import { TodosState } from '../store/states/todo.state';
import { AddTodo } from '../store/actions/todo.actions';

@Component({
  selector: 'hotel-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
    });
    this.subscriptionCount = this.todosCount.subscribe(
      (count) => (this.count = count)
    );
  }
  ngOnDestroy() {
    this.subscriptionCount.unsubscribe();
  }
  public form: FormGroup;
  public addNewTodo(): void {
    const todoDTO = {
      id: this.count,
      title: this.form.get('title').value,
      description: this.form.get('description').value,
      done: false,
    };
    this.store.dispatch(new AddTodo(todoDTO));
    this.router.navigateByUrl('/');
  }
  private count: number;
  private subscriptionCount: Subscription;
  @Select(TodosState.count) private todosCount: Observable<number>;
}
