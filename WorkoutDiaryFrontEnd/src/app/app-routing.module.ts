import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'workoutlist', component: WorkoutListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
