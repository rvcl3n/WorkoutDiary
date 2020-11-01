import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    WorkoutListComponent, 
    WorkoutCardComponent, 
    WorkoutPageComponent, 
    WorkoutExerciseComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutExerciseComponent
  ]
})
export class WorkoutModule { }
