import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';

import {MatCardModule} from '@angular/material/card';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';

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
    WorkoutListComponent
  ]
})
export class WorkoutModule { }
