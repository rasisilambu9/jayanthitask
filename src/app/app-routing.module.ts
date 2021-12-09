import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { LendComponent } from './lend/lend.component';
import { ReturnComponent } from './return/return.component';

const routes: Routes = [
  {
    path:'lend',
    component:LendComponent
  },
  {
    path:'return',
    component:ReturnComponent
  },
  {
    path:'book',
    component:BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
