import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutListComponent } from './workout/workout-list/workout-list.component';
import { WorkoutPageComponent } from './workout/workout-page/workout-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'workoutlist', component: WorkoutListComponent}, //I guess this approach doesn't support lazy loading and probably that's why I need to import Workout Module
  { path: 'workout', component: WorkoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
