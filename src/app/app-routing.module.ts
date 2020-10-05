import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './add/add.component';

const AboutRoute: Route = {
  path: 'about',
  component: AboutComponent,
};

const AddRoute: Route = {
  path: 'add',
  component: AddComponent,
};

const TodoRoute: Route = {
  path: '',
  pathMatch: 'full',
  component: TodoComponent,
};

const routes: Routes = [AboutRoute, AddRoute, TodoRoute];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
