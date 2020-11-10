import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutPageComponent } from './workout-page/workout-page.component';
import { WorkoutExerciseComponent } from './workout-exercise/workout-exercise.component';
import { CreateExerciseModalComponent } from './modals/create-exercise-modal/create-exercise-modal.component';

import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    WorkoutListComponent, 
    WorkoutCardComponent, 
    WorkoutPageComponent, 
    WorkoutExerciseComponent,
    CreateExerciseModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutExerciseComponent,
    //MatDialogModule //need to check if we realy need this (1)
  ]/*,
  entryComponents: [CreateExerciseModalComponent]*/ //need to check if we realy need this (2)
})
export class WorkoutModule { }
