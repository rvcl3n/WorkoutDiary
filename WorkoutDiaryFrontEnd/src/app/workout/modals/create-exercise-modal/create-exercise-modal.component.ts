import { Component, OnInit } from '@angular/core';
import { WorkoutExercise } from 'src/app/_models/workoutExercise.model';
import { MatDialogRef } from '@angular/material/dialog';;

@Component({
  selector: 'app-create-exercise-modal',
  templateUrl: './create-exercise-modal.component.html',
  styleUrls: ['./create-exercise-modal.component.scss']
})
export class CreateExerciseModalComponent implements OnInit {

  public model: WorkoutExercise = {id : Math.floor(Math.random() * 1000).toString(), name: "Test", sets: 3, reps: 10 };

  constructor(public dialogRef: MatDialogRef<CreateExerciseModalComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close(this.model);
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
