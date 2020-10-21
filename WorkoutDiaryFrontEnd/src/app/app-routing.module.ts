import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutListComponent } from './workout-list/workout-list.component';

const routes: Routes = [
  { path: 'workoutlist', component: WorkoutListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
