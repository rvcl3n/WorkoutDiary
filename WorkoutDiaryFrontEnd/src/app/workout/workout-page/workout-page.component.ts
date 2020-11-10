import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutExercise } from 'src/app/_models/workoutExercise.model';
import { WorkoutService } from '../services/workout.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateExerciseModalComponent } from '../modals/create-exercise-modal/create-exercise-modal.component';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.scss']
})
export class WorkoutPageComponent implements OnInit {

  public description: string = "Progressive workout";

  public workoutType: string;

  public dateTime: string;

  exercises: WorkoutExercise[];

  constructor(private router: Router, private workoutService: WorkoutService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.workoutService.getWorkoutExercises().subscribe(res => this.exercises = res);
  }

  addExercise(): void {
    //let workoutExercise: WorkoutExercise = {id : Math.floor(Math.random() * 1000).toString(), name: "Test", reps: 10 };
    //this.workoutService.addWorkoutExercise(workoutExercise).subscribe(exercise => this.exercises.push(exercise));

    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    const dialogRef = this.dialog.open(CreateExerciseModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => { this.workoutService.addWorkoutExercise(data)
        .subscribe(exercise => this.exercises.push(exercise));
      });
  }

  navigateToWorkoutList(): void {
    this.router.navigate(['workoutlist']);
  }

}
