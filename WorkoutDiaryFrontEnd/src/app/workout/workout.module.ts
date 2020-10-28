import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutCardComponent } from './workout-card/workout-card.component';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [WorkoutListComponent, WorkoutCardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class WorkoutModule { }
