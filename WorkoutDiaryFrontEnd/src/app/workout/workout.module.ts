import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



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
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    WorkoutListComponent,
    WorkoutExerciseComponent
  ]
})
export class WorkoutModule { }
