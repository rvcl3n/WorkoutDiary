import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';

import {MatCardModule} from '@angular/material/card';
import { CreateExerciseModalComponent } from './modals/create-exercise-modal/create-exercise-modal.component';


@NgModule({
  declarations: [
    WorkoutListComponent, 
    WorkoutCardComponent, 
    WorkoutPageComponent, 
    WorkoutExerciseComponent, CreateExerciseModalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutExerciseComponent
  ]
})
export class WorkoutModule { }
